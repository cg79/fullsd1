import {NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import  {FooterComponent} from './footer.component';

@NgModule({
  imports: [CommonModule,FormsModule],
  declarations: [
    FooterComponent

  ],
  exports: [
    FooterComponent
  ]
})
export class SharedModule {

}
