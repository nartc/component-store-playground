import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { Workflow } from '@component-store-playground/playground/workflows/data-access'
import { SharedUiIconModule } from '@component-store-playground/shared/ui/icon'
import { WorkflowListStore } from '../../stores'

@Component({
  selector: 'playground-workflow-display[workflow]',
  standalone: true,
  imports: [CommonModule, SharedUiIconModule],
  host: {
    class:
      'flex cursor-pointer hover:bg-blue-lightest rounded flex align-center justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2',
  },
  hostDirectives: [{ directive: RouterLink, inputs: ['routerLink: link'] }],
  template: `
    <p class="hover:text-blue-dark">
      {{ workflow.name }}
    </p>
    <button class="text-gray-200 hover:text-red-600" (click)="$event.stopPropagation(); deleteWorkflow()">
      <playground-icon icon="trash" size="sm" />
    </button>
  `,
  styleUrls: ['./workflow-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkflowDisplayComponent {
  readonly #workflowListStore = inject(WorkflowListStore)

  @Input() readonly workflow!: Workflow

  deleteWorkflow(): void {
    this.#workflowListStore.deleteWorkflowEffect(this.workflow)
  }
}
