import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AngularIdbModule } from '../../angular-idb'
import { TodosComponent } from './todos.component'
import { TodosService } from './todos.service'
import { RouterModule } from '@angular/router'
import { UiModule } from '../../ui/ui.module'

@NgModule({
  declarations: [TodosComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: TodosComponent }]), AngularIdbModule, UiModule],
  providers: [TodosService],
})
export class TodosModule {}
