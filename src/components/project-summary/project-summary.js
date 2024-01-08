import { css, html, LitElement } from 'lit'
import { normalize } from '../../normalize.css.js'

class ProjectSummary extends LitElement {
  render() {
    return html`
      <slate-stack part="stack" direction="row" align="center" gap="3xl" wrap>
        <slot></slot>
      </slate-stack>
    `
  }

  static styles = [
    normalize,
    css`
      ::slotted(te-project-summary-content) {
        flex: 1;
      }

      ::slotted(te-project-summary-images),
      ::slotted(img) {
        flex: 1.3;
      }

      ::slotted(img) {
        display: block;
        inline-size: auto;
      }

      @media (width < 680px) {
        slate-stack {
          flex-direction: column;
          align-items: flex-start;
          gap: var(--spacing-xl);
        }

        ::slotted(te-project-summary-content) {
          order: -1;
        }
      }
    `,
  ]
}

customElements.define('te-project-summary', ProjectSummary)

export { ProjectSummary }
