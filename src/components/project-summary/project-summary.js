import { SlateElement } from '@slate-ui/core/src/slate-element.js'

class ProjectSummary extends SlateElement {}

if (!customElements.get('te-project-summary')) {
  customElements.define('te-project-summary', ProjectSummary)
}

export { ProjectSummary }
