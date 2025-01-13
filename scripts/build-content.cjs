require('dotenv').config()
const cloudinary = require('cloudinary').v2
const camelCase = require('just-camel-case')
const fs = require('fs/promises')
const path = require('path')
const slugify = require('slugify')
const YAML = require('yaml')
const {
  defaultRenderers,
  getPages,
  renderNotionBlocks,
  renderNotionPageProperties,
} = require('@trevoreyre/notion')

const log = (...params) => {
  // console.log(...params)
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

function src(cloudinaryUrl, size) {
  const url = cloudinaryUrl.replace(/\/v\d+\//i, `/q_auto,f_auto,w_${size}/`)
  log('src', { size, cloudinaryUrl, url })
  return url
}

// Upload image to Cloudinary
async function uploadImage({ id, url }) {
  log('uploadImage', id, url)
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      url,
      {
        public_id: id,
        folder: process.env.CLOUDINARY_FOLDER_NAME,
        overwrite: false,
      },
      (error, result) => {
        if (error) {
          return reject(error)
        }
        return resolve(result)
      },
    )
  })
}

const renderers = {
  ...defaultRenderers,
  async image(block, content, children, id) {
    const { type } = block
    const { url } = block[type]

    let renderedImage = `<img src="${url}" alt="${content}" />\n`

    if (type === 'external') {
      return renderedImage
    }

    try {
      const image = await cloudinary.uploader.upload(url, {
        public_id: id,
        folder: process.env.CLOUDINARY_FOLDER_NAME,
        overwrite: false,
      })
      const imageUrl = image.secure_url

      return `<img alt="${content}" width="${image.width}" height="${
        image.height
      }" sizes="(min-width: 600px) 600px, 100vw" srcset="${src(imageUrl, 200)} 200w, ${src(
        imageUrl,
        400,
      )} 400w, ${src(imageUrl, 600)} 600w, ${src(imageUrl, 800)} 800w, ${src(
        imageUrl,
        1200,
      )} 1200w," />\n`
    } catch (error) {
      console.error(`Unable to upload image - ${error.message}`)
      return renderedImage
    }
  },
  async columnList(block, content, children) {
    return `<slate-stack direction="row">\n\n${children.join('\n')}\n</slate-stack>\n`
  },
  async column(block, content, children) {
    return `<div>\n\n${content}${children.join('\n')}\n</div>\n`
  },
  async table(block, content, children) {
    const { table_width, has_column_header } = block
    log('table')
    if (has_column_header) {
      const [firstRow, ...otherRows] = children
      return `${firstRow}\n| ${new Array(table_width)
        .fill('---')
        .join(' | ')} |\n${otherRows.map(row => row).join('\n')}\n`
    }
    return `${children.join('\n')}\n`
  },
}

const propertyRenderers = {
  ...renderers,
  bold: content => `<strong>${content}</strong>`,
  italic: content => `<em>${content}</em>`,
  strikethrough: content => `<s>${content}</s>`,
  underline: content => `<u>${content}</u>`,
  inlineCode: content => `<code>${content}</code>`,
  select: block => {
    log('select', block)
    return block?.name
  },
  multiSelect: blocks => {
    log('multiSelect', blocks)
    return blocks.map(block => block.name).filter(Boolean)
  },
  createdTime: block => {
    log('createdTime', block)
    return block
  },
  lastEditedTime: block => {
    log('lastEditedTime', block)
    return block
  },
  title: blocks => {
    log('title', blocks)
    return blocks.map(block => block.plain_text).join('')
  },
  async icon(block) {
    return block
  },
  emoji: block => {
    return block
  },
  async cover(block, id) {
    return this.file(block, id)
  },
  async file(block, id) {
    log('file', block, id)
    if (!block) {
      return null
    }
    const { url } = block

    let renderedImage = `<img src="${url}" alt="Cover image" />\n`

    try {
      const image = await cloudinary.uploader.upload(url, {
        public_id: id,
        folder: process.env.CLOUDINARY_FOLDER_NAME,
        overwrite: false,
      })
      return `<img src="${image.secure_url}" width="${image.width}" height="${image.height}" />\n`
    } catch (error) {
      console.error(`Unable to upload image - ${error.message}`)
      return renderedImage
    }
  },
}

function getRenderer(type, renderers, fallback) {
  const noRenderer = block => log(`No renderer found for ${block}`)
  if (!type || !renderers) {
    return fallback ?? noRenderer
  }

  const renderer = renderers[type] ?? renderers[camelCase(type)]
  const fallbackRenderer = fallback ?? renderers.default ?? noRenderer
  return renderer ? renderer.bind(renderers) : fallbackRenderer
}

const plainTextRenderers = {
  async default(block, content) {
    return `${content ?? ''} `
  },
  async richText(block) {
    const defaultRichTextRenderer = defaultRenderers.richText.bind(this)
    return defaultRichTextRenderer(block)
  },
  async text(block) {
    return block.text.content.trim()
  },
  async mention(block) {
    const mentionBlock = block.mention
    const { type } = mentionBlock
    const renderer = getRenderer(type, this)
    const renderedBlock = await renderer(mentionBlock, type)
    return renderedBlock
  },
  async page(block) {
    return `Page - ${block.page.id}`
  },
  async date(block) {
    return `${block.date.start}${block.date.end ? ` - ${block.date.end}` : ''}`
  },
  async toDoList(children) {
    return `${children.join(' ')} `
  },
  async bulletedList(children) {
    return `${children.join(' ')} `
  },
  async numberedList(children) {
    return `${children.join(' ')} `
  },
  async toggle(block, content, children) {
    return `${content} ${children.join(' ')} `
  },
  async divider(block) {
    return ''
  },
  async table(block, content, children) {
    return `${children.join(', ')} `
  },
  async tableRow(block) {
    const cells = await Promise.all(
      block.cells.map(async cell => {
        const renderedCell = await this.richText(cell)
        return renderedCell
      }),
    )
    return `${cells.join(', ')}`
  },
  async unsupported() {
    return ''
  },
}

async function buildContent() {
  await fs.mkdir(path.join(__dirname, '..', 'src', 'content', 'posts'), {
    recursive: true,
  })
  let pages = []

  try {
    throw new Error('Skipping cache')
    // pages = require('./content.json')
  } catch {
    log('No cached content. Fetching from Notion...')
    pages = await getPages({
      authToken: process.env.NOTION_AUTH_TOKEN,
      databaseId: process.env.NOTION_DATABASE_ID,
    })
  }

  // if (process.env.WRITE_BUILD_FILES) {
  //   await fs.writeFile('./scripts/content.json', JSON.stringify(pages, null, 2))
  // }

  for (const page of pages) {
    const pageProperties = await renderNotionPageProperties(
      page,
      propertyRenderers,
    )
    log({ pageProperties })
    const blocks = await renderNotionBlocks(page.children, renderers)
    log({ blocks })

    // Generate excerpt if post doesn't include one.
    if (!pageProperties.excerpt) {
      const plainTextBlocks = await renderNotionBlocks(
        page.children,
        plainTextRenderers,
      )
      const content = plainTextBlocks.join(' ').replace(/\s+/g, ' ')

      // Grab first ~150 characters for excerpt, and slice off last word to avoid
      // awkward partial words.
      let excerpt =
        content.slice(0, 150).trim().split(' ').slice(0, -1).join(' ') + '...'
      pageProperties.excerpt = excerpt
    }

    let { name, type, tags } = pageProperties
    const slug = slugify(name).toLowerCase()
    pageProperties.title = name
    pageProperties.type = type ?? 'note'
    pageProperties.tags = (tags || []).concat(pageProperties.type)

    const markdown = '---\n'
      .concat(YAML.stringify(pageProperties))
      .concat('\n---\n\n')
      .concat(blocks.join('\n'))

    await fs.writeFile(
      path.join(__dirname, '..', 'src', 'content', 'posts', `${slug}.md`),
      markdown,
    )
  }
}

;(async () => {
  await buildContent()
})()
