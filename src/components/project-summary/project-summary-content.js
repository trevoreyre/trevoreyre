import { css, html, LitElement } from 'lit'
import { normalize } from '../../normalize.css.js'

class ProjectSummaryContent extends LitElement {
  render() {
    return html`
      <slate-stack gap="lg">
        <slot></slot>
      </slate-stack>
    `
  }

  static styles = [normalize]
}

customElements.define('te-project-summary-content', ProjectSummaryContent)

export { ProjectSummaryContent }
