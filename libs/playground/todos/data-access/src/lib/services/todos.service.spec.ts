import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest'
import { NgxIndexedDBModule, NgxIndexedDBService } from 'ngx-indexed-db'
import { TodosService } from './todos.service'

describe('TodosService', () => {
  let spectator: SpectatorService<TodosService>
  const createService = createServiceFactory({
    service: TodosService,
    providers: [{ provide: NgxIndexedDBService, useValue: {} }],
    imports: [NgxIndexedDBModule.forRoot()],
  })

  beforeEach(() => (spectator = createService()))

  it('should create', () => {
    expect(spectator.service).toBeTruthy()
  })
})
