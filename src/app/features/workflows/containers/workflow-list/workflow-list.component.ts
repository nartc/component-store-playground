import { Component, OnInit } from '@angular/core'
import { randomId } from '../../../../util/random-id'
import { Workflow } from '../../models/workflow'
import { WorkflowType } from '../../models/workflow-item'
import { WorkflowListStore } from './workflow-list.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <app-page>
        <div class="bg-white shadow-lg rounded-lg overflow-hidden py-4 px-6">
          <div class="sm:flex sm:items-center">
            <div class="flex-grow">
              <h3 class="font-semibold px-2 py-3 leading-tight">Workflows</h3>
              <div class="w-full">
                <app-loading [loading]="vm.isLoading"></app-loading>

                <ng-container *ngIf="vm.isEmpty">
                  <div
                    class="flex items-center justify-center bg-gray-100  text-sm font-bold  p-16  rounded"
                    role="alert"
                  >
                    <p>There are no workflows.</p>
                  </div>
                </ng-container>
                <ng-container *ngFor="let workflow of vm.workflows">
                  <div class="flex cursor-pointer my-1 hover:bg-blue-lightest rounded">
                    <div class="py-3">
                      <button class="text-red-600" (click)="deleteWorkflow(workflow)">
                        <i class="fa fa-trash"></i>
                      </button>
                    </div>
                    <div class="h-10 py-3 px-1">
                      <a class="hover:text-blue-dark" [routerLink]="workflow.id">
                        {{ workflow.name }}
                      </a>
                    </div>
                  </div>
                </ng-container>

                <div
                  class="flex cursor-pointer p-1 bg-gray-100 hover:bg-blue-lightest animate-pulse rounded"
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
                class="my-2 w-full text-lg bg-gray-100 text-grey-darkest rounded h-10 p-3 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </app-page>
    </ng-container>
  `,
  providers: [WorkflowListStore],
})
export class WorkflowListComponent implements OnInit {
  readonly vm$ = this.workflowListStore.vm$

  constructor(private readonly workflowListStore: WorkflowListStore) {}

  ngOnInit(): void {
    this.workflowListStore.loadWorkflowsEffect()
  }

  addWorkflow(task: HTMLInputElement): void {
    this.workflowListStore.addWorkflowEffect({
      name: task.value,
      group: {
        id: randomId(),
        type: WorkflowType.group,
        children: [],
      },
    })
    task.value = ''
  }

  deleteWorkflow(workflow: Workflow): void {
    this.workflowListStore.deleteWorkflowEffect(workflow)
  }
}
