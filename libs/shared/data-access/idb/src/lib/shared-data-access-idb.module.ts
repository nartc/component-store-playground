import { NgModule } from '@angular/core'
import { NgxIndexedDBModule } from 'ngx-indexed-db'

@NgModule({
  imports: [
    NgxIndexedDBModule.forRoot({
      name: 'default',
      version: 1,
      objectStoresMeta: [
        { store: 'todos', storeConfig: { keyPath: 'id', autoIncrement: true }, storeSchema: [] },
        { store: 'workflows', storeConfig: { keyPath: 'id', autoIncrement: true }, storeSchema: [] },
      ],
    }),
  ],
})
export class SharedDataAccessIdbModule {}
