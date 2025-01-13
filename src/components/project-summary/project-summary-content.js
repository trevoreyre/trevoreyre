import { SlateElement } from '@slate-ui/core/src/slate-element.js'

class ProjectSummaryContent extends SlateElement {}

if (!customElements.get('te-project-summary-content')) {
  customElements.define('te-project-summary-content', ProjectSummaryContent)
}

export { ProjectSummaryContent }
