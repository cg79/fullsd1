import {NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
// import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FileComponentComponent } from '../../file-component/file-component.component';
import { ForgotPasswordComponent } from '../user/forgot-password/forgot-password.component';
import { SetNewPasswordComponent } from '../user/set-new-password/set-new-password.component';
import { LoginComponent } from './login/login.component';

import { userRouter } from './user.router';
// https://angularfirebase.com/lessons/how-to-lazy-load-components-in-angular-4-in-three-steps/

@NgModule({
  imports: [CommonModule,FormsModule,TextMaskModule,userRouter],
  declarations: [
    CreateUserComponent,
    // ConfirmEmailComponent,
    ChangePasswordComponent,
    FileComponentComponent,
    EditUserComponent,
    ForgotPasswordComponent,
    SetNewPasswordComponent,
    LoginComponent
  ],
})
export class UserModule {

}
