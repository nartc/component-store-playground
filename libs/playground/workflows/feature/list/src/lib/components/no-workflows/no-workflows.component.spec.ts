import { createComponentFactory } from '@ngneat/spectator/jest'
import { NoWorkflowsComponent } from './no-workflows.component'

describe('NoWorkflowsComponent', () => {
  const createComponent = createComponentFactory({ component: NoWorkflowsComponent })

  it('should create', () => {
    const spectator = createComponent()

    expect(spectator).toBeTruthy()
  })
})
