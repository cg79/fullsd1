import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }  from '../home/home.component';
import { NotFoundComponent }    from '../not-found/notfound.component';
import { AboutComponent }  from '../about/about.component';
// import { LoginComponent }  from '../login/login.component';
import {ResetPasswordComponent} from "../login/resetpassword/resetpassword.component";
import {AuthGuard} from "./auth-guard.service";
import {CoursesComponent} from "../ui/courses/courses.component";
// import {CreateUserComponent} from "../ui/user/create-user/create-user.component";
// import {ForgotPasswordComponent} from "../ui/user/forgot-password/forgot-password.component";
// import {ChangePasswordComponent} from "../ui/user/change-password/change-password.component";
// import {EditUserComponent} from "../ui/user/edit-user/edit-user.component";
import {ConfirmEmailComponent} from "../ui/user/confirm-email/confirm-email.component";
import { ModuleWithProviders } from '@angular/core';
// import {UserModule} from "../ui/user/user-module";

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'courses',
    component:CoursesComponent
  },


  // {
  //   path: 'forgotPassword',
  //   component: ForgotPasswordComponent
  // },
  // {
  //   path: 'edituser',
  //   component: EditUserComponent
  // },
  {
    path: 'confirmemail',
    component: ConfirmEmailComponent
  },
  // {
  //   path: 'resetpassword',
  //   component: ChangePasswordComponent
  // },

  {
    path:'about',
    component:AboutComponent
  },

  // {
  //   path:'login',
  //   component:LoginComponent,
  //
  // },
  // {
  //   path:'createUser',
  //   component:CreateUserComponent
  // },

  {
    path:'resetpassword',
    component:ResetPasswordComponent,
    canActivate:[AuthGuard]
  },
  { path: 'user', loadChildren: '../ui/user/user-module#UserModule'},
  // { path: 'user', loadChildren: () => UserModule},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        // preloadingStrategy: SelectivePreloadingStrategy,

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    //CanDeactivateGuard,
    //SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }

