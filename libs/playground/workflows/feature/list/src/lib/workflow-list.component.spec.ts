import { RouterTestingModule } from '@angular/router/testing'
import { WorkflowsService } from '@component-store-playground/playground/workflows/data-access'
import { createComponentFactory, mockProvider, Spectator, SpyObject } from '@ngneat/spectator/jest'
import { of } from 'rxjs'
import { WorkflowListStore } from './stores'

import { WorkflowListComponent } from './workflow-list.component'

describe('WorkflowListComponent', () => {
  let spectator: Spectator<WorkflowListComponent>
  let store: SpyObject<WorkflowListStore>
  const createComponent = createComponentFactory({
    component: WorkflowListComponent,
    imports: [RouterTestingModule],
    mocks: [WorkflowsService],
    componentProviders: [
      mockProvider(WorkflowListStore, {
        vm$: of({ workflows: [], saving: false, isLoading: false, isEmpty: true }),
        loadWorkflowsEffect: jest.fn(),
        addWorkflowEffect: jest.fn(),
        deleteWorkflowEffect: jest.fn(),
      }),
    ],
    shallow: true,
  })

  beforeEach(() => {
    spectator = createComponent()
    store = spectator.inject(WorkflowListStore, true)
  })

  describe('initialize', () => {
    it('should create', () => {
      expect(spectator.component).toBeTruthy()
      expect(spectator.component.vm$).toBe(store.vm$)
    })

    it('should call store.loadWorkflowsEffect on init', () => {
      expect(store.loadWorkflowsEffect).toHaveBeenCalled()
    })
  })

  it('should call store.addWorkflowEffect on addWorkflow', () => {
    spectator.component.addWorkflow({ value: 'new workflow' } as HTMLInputElement)
    expect(store.addWorkflowEffect).toHaveBeenCalled()
  })
})
