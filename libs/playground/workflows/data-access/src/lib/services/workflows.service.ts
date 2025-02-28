import { Injectable } from '@angular/core'
import { AngularIdbService } from '@component-store-playground/shared/data-access/idb'
import { NgxIndexedDBService } from 'ngx-indexed-db'
import { Workflow } from '../models'

@Injectable({ providedIn: 'root' })
export class WorkflowsService extends AngularIdbService<Workflow> {
  constructor(db: NgxIndexedDBService) {
    super(db, 'workflows', { delay: 150 })
  }
}
