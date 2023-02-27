import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest'
import { NgxIndexedDBModule, NgxIndexedDBService } from 'ngx-indexed-db'
import { WorkflowsService } from './workflows.service'

describe('WorkflowsService', () => {
  let spectator: SpectatorService<WorkflowsService>
  const createService = createServiceFactory({
    service: WorkflowsService,
    providers: [{ provide: NgxIndexedDBService, useValue: {} }],
    imports: [NgxIndexedDBModule.forRoot()],
  })

  beforeEach(() => (spectator = createService()))

  it('should create', () => {
    expect(spectator.service).toBeTruthy()
  })
})
