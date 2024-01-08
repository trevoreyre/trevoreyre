import { css, html, LitElement } from 'lit'
import { normalize } from '../../normalize.css.js'

class ProjectSummaryImages extends LitElement {
  render() {
    return html`
      <slate-stack gap="sm">
        <slot></slot>
      </slate-stack>
    `
  }

  static styles = [
    normalize,
    css`
      ::slotted(img) {
        border-radius: var(--border-radius-md);
        box-shadow: 0 0 0 1px hsl(var(--color-neutral-900)), 0 0 0 6px hsl(var(--color-neutral-700)),
          0 0 0 7px hsl(var(--color-neutral-600)),
          0 25px 50px 0 hsl(var(--color-neutral-1000) / 25%);
      }
    `,
  ]
}

customElements.define('te-project-summary-images', ProjectSummaryImages)

export { ProjectSummaryImages }
