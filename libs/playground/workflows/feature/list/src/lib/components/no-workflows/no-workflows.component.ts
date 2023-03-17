import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'playground-no-workflows',
  standalone: true,
  imports: [CommonModule],
  host: {
    class: 'flex items-center justify-center bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded',
    role: 'alert',
  },
  template: `
    <p>There are no workflows.</p>
  `,
  styleUrls: ['./no-workflows.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoWorkflowsComponent {}
