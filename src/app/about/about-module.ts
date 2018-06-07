import {NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AboutComponent } from './about.component';

import { aboutRouter } from './about.router';

@NgModule({
  imports: [CommonModule,FormsModule],
  declarations: [
    AboutComponent
  ],
})
export class AboutModule {

}
