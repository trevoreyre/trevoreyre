import { SlateElement } from '@slate-ui/core/src/slate-element.js'

class ProjectSummaryImages extends SlateElement {}

if (!customElements.get('te-project-summary-images')) {
  customElements.define('te-project-summary-images', ProjectSummaryImages)
}

export { ProjectSummaryImages }
