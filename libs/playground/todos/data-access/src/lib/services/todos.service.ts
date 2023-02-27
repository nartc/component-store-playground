import { Injectable } from '@angular/core'
import { AngularIdbService } from '@component-store-playground/shared/data-access/idb'
import { NgxIndexedDBService } from 'ngx-indexed-db'
import { Observable } from 'rxjs'
import { Todo } from '../models'

@Injectable({ providedIn: 'root' })
export class TodosService extends AngularIdbService<Todo> {
  constructor(db: NgxIndexedDBService) {
    super(db, 'todos', { delay: 500 })
  }

  toggleTodo(todo: Todo): Observable<Todo> {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.update(todo.id!, { ...todo, done: !todo.done })
  }
}
