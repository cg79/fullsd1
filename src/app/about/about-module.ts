import {NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import  {FooterComponent} from '../ui/footer/footer.component';
import { AboutComponent } from './about.component';
import {WhoweareComponent} from './whoweare/whoweare.component'
import {SharedModule } from '../ui/footer/shared-module';

import { aboutRouter } from './about.router';

@NgModule({
  imports: [CommonModule,SharedModule,FormsModule, aboutRouter],
  declarations: [
    AboutComponent,
    WhoweareComponent

  ],
})
export class AboutModule {

}
