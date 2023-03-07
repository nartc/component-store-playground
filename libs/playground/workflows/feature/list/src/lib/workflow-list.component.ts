import { AsyncPipe, NgForOf, NgIf } from '@angular/common'
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core'
import { RouterLink } from '@angular/router'
import { Workflow, WorkflowType } from '@component-store-playground/playground/workflows/data-access'
import { randomId } from '@component-store-playground/playground/workflows/util'
import { SharedUiIconModule } from '@component-store-playground/shared/ui/icon'
import { SharedUiLoadingModule } from '@component-store-playground/shared/ui/loading'
import { SharedUiPageModule } from '@component-store-playground/shared/ui/page'
import { WorkflowListStore } from './stores'

@Component({
  selector: 'playground-workflow-list',
  standalone: true,
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <playground-page>
        <div
          class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 shadow-lg rounded-lg overflow-hidden py-4 px-6"
        >
          <div class="sm:flex sm:items-center">
            <div class="flex-grow">
              <h3 class="font-semibold px-2 py-3 leading-tight">Workflows</h3>
              <div class="w-full">
                <playground-loading [loading]="vm.isLoading"></playground-loading>

                <ng-container *ngIf="vm.isEmpty">
                  <div
                    class="flex items-center justify-center bg-gray-100 dark:bg-gray-700 px-4 py-2 mb-3 rounded"
                    role="alert"
                  >
                    <p>There are no workflows.</p>
                  </div>
                </ng-container>
                <ng-container *ngFor="let workflow of vm.workflows">
                  <div
                    [routerLink]="workflow.id"
                    class="flex cursor-pointer mb-3 hover:bg-blue-lightest rounded flex align-center justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2"
                  >
                    <p class="hover:text-blue-dark">
                      {{ workflow.name }}
                    </p>
                    <button
                      class="text-gray-200 hover:text-red-600"
                      (click)="$event.stopPropagation(); deleteWorkflow(workflow)"
                    >
                      <playground-icon icon="trash" size="sm"></playground-icon>
                    </button>
                  </div>
                </ng-container>

                <div
                  class="flex cursor-pointer px-4 py-2 mb-3 bg-gray-100 dark:bg-gray-700 hover:bg-blue-lightest animate-pulse rounded"
                  *ngIf="vm.saving"
                >
                  Saving...
                </div>
              </div>
              <input
                #task
                type="text"
                required="required"
                placeholder="Add workflow name and hit ⏎"
                (keydown.enter)="addWorkflow(task)"
                class="w-full text-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded px-4 py-2 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </playground-page>
    </ng-container>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [WorkflowListStore],
  imports: [AsyncPipe, NgForOf, NgIf, RouterLink, SharedUiLoadingModule, SharedUiIconModule, SharedUiPageModule],
})
export class WorkflowListComponent implements OnInit {
  readonly #workflowListStore = inject(WorkflowListStore)
  protected readonly vm$ = this.#workflowListStore.vm$

  ngOnInit(): void {
    this.#workflowListStore.loadWorkflowsEffect()
  }

  protected addWorkflow(task: HTMLInputElement): void {
    this.#workflowListStore.addWorkflowEffect({
      name: task.value,
      group: {
        id: randomId(),
        type: WorkflowType.group,
        children: [],
        level: 0,
      },
    })
    task.value = ''
  }

  protected deleteWorkflow(workflow: Workflow): void {
    this.#workflowListStore.deleteWorkflowEffect(workflow)
  }
}
