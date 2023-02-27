import { NgModule } from '@angular/core'
import { SvgIconRegistry, SvgIconComponent } from '@ngneat/svg-icon'
import { uiIconMap } from './constants'
import { IconComponent } from './icon.component'

@NgModule({
  imports: [SvgIconComponent],
  declarations: [IconComponent],
  exports: [IconComponent],
})
export class SharedUiIconModule {
  constructor(readonly registry: SvgIconRegistry) {
    uiIconMap.forEach((data, name) => this.registry.register({ name, data }))
  }
}
