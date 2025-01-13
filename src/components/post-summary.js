// @ts-nocheck
import { css, html, LitElement } from 'lit'
// import '@slate-ui/core/dist/components/slate-heading.js'
// import '@slate-ui/core/dist/components/slate-link.js'
// import '@slate-ui/core/dist/components/slate-stack.js'
// import '@slate-ui/core/dist/components/slate-text.js'
// import './icons.js'

class PostSummary extends LitElement {
  render() {
    return html`
      <article part="host">
        <slate-stack part="stack" gap="md">
          <slot></slot>
        </slate-stack>
      </article>
    `
  }

  static styles = [
    // normalize,
    css`
      :host(:hover) {
        --post-summary-link-color: var(--color-brand-700);
        --post-summary-link-icon-opacity: 1;
        --post-summary-link-icon-translate: var(--spacing-4xs);
      }
    `,
  ]
}

class PostSummaryTitle extends LitElement {
  static properties = {
    size: { type: String, reflect: true },
    weight: { type: String, reflect: true },
  }

  render() {
    const size = this.size ?? '2xl'
    const weight = this.weight ?? 'normal'

    return html`
      <slate-heading part="host" size=${size} weight=${weight}>
        <slot></slot>
      </slate-heading>
    `
  }

  // static styles = [normalize]
}

class PostSummaryDescription extends LitElement {
  static properties = {
    size: { type: String, reflect: true },
  }

  render() {
    const size = this.size ?? 'lg'

    return html`
      <slate-text part="host" variant="secondary" size=${size}>
        <slot></slot>
      </slate-text>
    `
  }

  // static styles = [normalize]
}

class PostSummaryLink extends LitElement {
  static properties = {
    size: { type: String, reflect: true },
  }

  render() {
    const size = this.size ?? 'lg'

    return html`
      <slate-stack part="host" direction="row" align="center" gap="4xs">
        <slate-text part="text" size=${size} weight="bold">
          <slot></slot>
        </slate-text>
        <lla-icon-arrow-right part="icon"></lla-icon-arrow-right>
      </slate-stack>
    `
  }

  static styles = [
    // normalize,
    css`
      :host {
        color: var(--post-summary-link-color, hsl(var(--color-text-primary)));
        transition: color 100ms ease;
      }

      slate-text {
        color: inherit;
      }

      lla-icon-arrow-right {
        inline-size: var(--size-sm);
        block-size: var(--size-sm);
        fill: var(--color-brand-700);
        opacity: var(--post-summary-link-icon-opacity, 0);
        translate: var(--post-summary-link-icon-translate, var(--spacing-none));
        transition:
          opacity 100ms ease,
          translate 300ms ease;
      }
    `,
  ]
}

if (!customElements.get('lla-post-summary')) {
  customElements.define('lla-post-summary', PostSummary)
}
if (!customElements.get('lla-post-summary-title')) {
  customElements.define('lla-post-summary-title', PostSummaryTitle)
}
if (!customElements.get('lla-post-summary-description')) {
  customElements.define('lla-post-summary-description', PostSummaryDescription)
}
if (!customElements.get('lla-post-summary-link')) {
  customElements.define('lla-post-summary-link', PostSummaryLink)
}
export {
  PostSummary,
  PostSummaryTitle,
  PostSummaryDescription,
  PostSummaryLink,
}
