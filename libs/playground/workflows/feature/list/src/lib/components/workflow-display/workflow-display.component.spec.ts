import { ActivatedRoute } from '@angular/router'
import { Workflow, WorkflowType } from '@component-store-playground/playground/workflows/data-access'
import { createComponentFactory, mockProvider } from '@ngneat/spectator/jest'
import { WorkflowListStore } from '../../stores'
import { WorkflowDisplayComponent } from './workflow-display.component'

describe('WorkflowDisplayComponent', () => {
  const createComponent = createComponentFactory({
    component: WorkflowDisplayComponent,
    mocks: [ActivatedRoute],
    providers: [
      mockProvider(WorkflowListStore, {
        deleteWorkflowEffect: jest.fn(),
      }),
    ],
  })

  const createWorkflow = ({ id = '1', name = 'foo' }: Partial<Workflow> = {}): Workflow => ({
    id,
    name,
    group: { id: '2', children: [], type: WorkflowType.group, level: 0 },
    maxDepth: 2,
  })

  it('should create', () => {
    const spectator = createComponent({ props: { workflow: createWorkflow({ id: '1234' }) } })

    expect(spectator).toBeTruthy()
  })

  it('should call store.deleteWorkflowEffect on deleteWorkflow', () => {
    const workflow = createWorkflow({ name: 'Chau' })
    const spectator = createComponent({ props: { workflow } })
    const store = spectator.inject(WorkflowListStore)

    spectator.component.deleteWorkflow()
    expect(store.deleteWorkflowEffect).toHaveBeenCalledWith(workflow)
  })
})
