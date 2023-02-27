import { Component } from '@angular/core'
import { FieldType } from '@ngx-formly/core'

@Component({
  template: `
    <input
      class="shadow-sm dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-purple-500 focus:border-purple-500 border-gray-300 rounded-md block w-full sm:text-sm"
      [ngClass]="classNames"
      [type]="type"
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [class.is-invalid]="showError"
    />
  `,
})
export class FormInputComponent extends FieldType {
  get type(): string {
    return this.props.type || 'text'
  }

  get classNames(): string {
    return this.showError
      ? 'border-red-300 text-red-900 placeholder-red-400 focus:outline-none focus:ring-red-500 focus:border-red-500'
      : ''
  }
}
