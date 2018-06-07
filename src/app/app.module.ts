import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';

import { ModalModule  } from 'ngx-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { HttpWrapperService } from './services/http/httpService'
import { AppRoutingModule }        from './routes/app-routing.module';
import { HomeComponent }        from './home/home.component';
import { NotFoundComponent }        from './not-found/notfound.component';
import { AboutComponent }  from './about/about.component';
import { ObjectKeysPipe }  from './pipes/objectKeys.pipe';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe'
import { Angular2SocialLoginModule } from 'angular2-social-login';
// import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './ui/header/header.component';
import  { TypoComponent } from './ui/type/typo.component';
import  { HomePresentationComponent } from './ui/homePresentation/homePresentation.component';
import { InstruireDetailsComponent } from './instruire/instruire-details/instruire-details.component';
import { CollapsibleNewsComponent } from './ui/news-management/collapsible-news/collapsible-news.component';
import {NewsService} from "./ui/news-management/services/newsService";

import { FooterComponent } from './ui/footer/footer.component';
import { LocalStorageModule } from 'angular-2-local-storage';

import {LocalizationService} from "./services/localization/localization.service";

import {AuthGuard} from "./routes/auth-guard.service";
import {PubSubService} from "./services/pubsub/pubsub";

import { CoursesComponent } from './ui/courses/courses.component';
import {SocketService} from "./services/socket/socketService";

import {UtilsService} from "./services/utils/utilsService";
// import { CreateUserComponent } from './ui/user/create-user/create-user.component';
import { ForgotPasswordComponent } from './ui/user/forgot-password/forgot-password.component';
// import { SetNewPasswordComponent } from './ui/user/set-new-password/set-new-password.component';
// import { ChangePasswordComponent } from './ui/user/change-password/change-password.component';
import { ResetPasswordComponent } from './login/resetpassword/resetpassword.component';
// import { EditUserComponent } from './ui/user/edit-user/edit-user.component';
import { ConfirmEmailComponent } from './ui/user/confirm-email/confirm-email.component';



import { ContactComponent } from './contact/contact.component';
import { ShowContactDialogComponent } from './contact/show-contact-dialog/show-contact-dialog.component';

// import {UserModule} from "./ui/user/user-module";

let providers = {

  "facebook": {
    "clientId": "2046457209013195",
    "apiVersion": "v2.11" //like v2.4
  }};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent,
    ObjectKeysPipe,
    EscapeHtmlPipe,
    // LoginComponent,
    HeaderComponent,
    TypoComponent,
    HomePresentationComponent,
    ResetPasswordComponent,
    FooterComponent,
    // FileComponentComponent,
    CoursesComponent,
    // CreateUserComponent,
    // ForgotPasswordComponent,
    // SetNewPasswordComponent,
    // ChangePasswordComponent,
    // EditUserComponent,
    ConfirmEmailComponent,
    ContactComponent,
    ShowContactDialogComponent,
    InstruireDetailsComponent,
    CollapsibleNewsComponent
    //
  ],
  imports: [
    Angular2SocialLoginModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    HttpModule,
    ModalModule.forRoot(),
    NgbModule.forRoot()
    // UserModule
  ],
  providers: [HttpWrapperService, AuthGuard,PubSubService, SocketService, UtilsService, LocalizationService, NewsService ],
  bootstrap: [AppComponent],
  entryComponents: [
    ContactComponent
  ],
})


export class AppModule { }

Angular2SocialLoginModule.loadProvidersScripts(providers);
