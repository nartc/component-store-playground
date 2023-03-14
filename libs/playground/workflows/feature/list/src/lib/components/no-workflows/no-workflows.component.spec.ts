import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NoWorkflowsComponent } from './no-workflows.component'

describe('NoWorkflowsComponent', () => {
  let component: NoWorkflowsComponent
  let fixture: ComponentFixture<NoWorkflowsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoWorkflowsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(NoWorkflowsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
