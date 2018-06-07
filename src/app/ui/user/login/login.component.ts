import {Component, OnInit, OnDestroy, ViewChild, AfterViewChecked} from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpWrapperService } from '../../../services/http/httpService'
import { AuthService } from "angular2-social-login";
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import {PubSubService} from "../../../services/pubsub/pubsub";
import {LocalizationService} from "../../../services/localization/localization.service";
// import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent implements OnDestroy  {

  private text: string;
  private  httpService: HttpWrapperService;
  public user;
  sub: any;

  formErrors = {
    'email': 'ddd',
    'password': 'sss'
  };

  myForm: NgForm;
  @ViewChild('myForm') currentForm: NgForm;

  email: string = '';
  password: string = '';
  uiMessage: string = '';

  constructor(public _auth: AuthService, httpService: HttpWrapperService,
              private router: Router,
              private localStorageService: LocalStorageService,
              private pubSubService: PubSubService,
              public localizationService: LocalizationService
              //private fb: FacebookService
  )
  {
    this.httpService = httpService;
    this.text = 'console.log("start");';

    // fb.init({
    //   appId: '1123667347736940',
    //   version: 'v2.11'
    // });
  }

  validateEmail(emailValue)
  {
    // var controls = this.currentForm.form.controls;
    // if(!controls.email.isDirty)
    // {
    //   return true;
    // }
    if(!emailValue)
    {
      this.formErrors.email = "Email";
      return false;
    }
    this.formErrors.email = "";
    return true;
  }

  validatePassword(passwordValue)
  {
    if(!passwordValue)
    {
      this.formErrors.password = "Parola";
      return false;
    }
    this.formErrors.password = "";
    return true;
  }

  loginOk(resp)
  {
    this.localStorageService.add('user',resp.data);
   this.pubSubService.publish("login", resp.data);
    this.router.navigate(['/home']);
    // this.router.navigate(['/home'], { queryParams: { returnUrl: 'sd' }});
  }

  loginFailure()
  {

  }

  loginWithFB(){
    // this.fb.login()
    //   .then((res: LoginResponse) => {
    //     console.log('Logged in', res);
    //   })
    //   .catch(this.handleError);

    const self = this;
    const provider = 'facebook';
    this.sub = this._auth.login(provider)
      .subscribe((data:any) => {
        // console.log(data);
        self.email = data.email;
        //user data
        //name, image, uid, provider, uid, email, token (accessToken for Facebook & google, no token for linkedIn), idToken(only for google)
          const loginRequest: any = {
            email:self.email,
            //password: this.password
          };

          try{
            var names = data.name.match(/\w+/g);
            loginRequest.firstName = names[0];
            loginRequest.lastName = names[1];

          }catch (e){

          }
          const loginResponsePromise  = this.httpService.postJson("api/pub/security/loginfb",loginRequest);
          loginResponsePromise.then(function (resp) {
            self.loginOk(resp);
          });
    }
    )
  }

  // private handleError(error) {
  //   console.error('Error processing action', error);
  // }

  logoutFB(){

    this._auth.logout().subscribe(
      (data)=>
      {
        this.user=null;
      }
    )
  }

  async submitForm()
  {
    this.uiMessage = '';
    if(!this.validateEmail(this.email))
    {
      return;
    }
    if(!this.validatePassword(this.password))
    {
      return;
    }

    const loginRequest = {
      login:this.email,
      password: this.password
    };

    const loginResponse  = await this.httpService.postJson("api/pub/security/login",loginRequest);

    if(loginResponse.success === false)
    {
      this.uiMessage = 'Invalid login ';
      return;
    }
    this.loginOk(loginResponse);

  }

  ngOnDestroy(){
    // if(this.sub) {
    //   this.sub.unsubscribe();
    // }
  }

}
