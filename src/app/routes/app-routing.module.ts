import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }  from '../home/home.component';
import { NotFoundComponent }    from '../not-found/notfound.component';
// import {ResetPasswordComponent} from "../ui/user/login/resetpassword/resetpassword.component";
import {AuthGuard} from "./auth-guard.service";
import {CoursesComponent} from "../ui/courses/courses.component";
import {ConfirmEmailComponent} from "../ui/user/confirm-email/confirm-email.component";
import { ModuleWithProviders } from '@angular/core';

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
    loadChildren: '../about/about-module#AboutModule'
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

  // {
  //   path:'resetpassword',
  //   component:ResetPasswordComponent,
  //   canActivate:[AuthGuard]
  // },
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
        enableTracing: true, // <-- debugging purposes only
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

