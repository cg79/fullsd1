import {Component, OnInit, ViewChild} from '@angular/core';
import language from '../../../facade/language';
import {HttpWrapperService} from "../../../services/http/httpService";
import {NgForm} from "@angular/forms";
import {AuthService} from "angular2-social-login";
import {Router} from "@angular/router";
import {LocalStorageService} from "angular-2-local-storage";
import {PubSubService} from "../../../services/pubsub/pubsub";
import {LocalizationService} from "../../../services/localization/localization.service";
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  public user;
  ngOnInit(): void {
    this.user = this.localStorageService.get('user');

  }

  private text: string;
  private  httpService: HttpWrapperService;

  sub: any;
  public mask = ['(', /[0-9]/, /\d/, /\d/, /\d/,')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/,  /\d/];
// /^\d{4}-\d{3}-\d{3}/;
//  public mask = /^\d{4}-\d{3}-\d{3}/;

  // ui:any={
  //   companyLogo:null,
  //   companyName:'',
  //   phone:'',
  //   firstName:'',
  //   lastName:'',
  //   email:'',
  //   userOrCompany:0,
  //   allowLogo:false
  // };

  formErrors = {
    'email': '',
    'password': ''
  };

  // createUserForm: NgForm;
  @ViewChild('createUserForm') currentForm: NgForm;

  email: string = '';
  password: string = '';
  uiMessage: string = '';

  constructor(public _auth: AuthService, httpService: HttpWrapperService,
              private router: Router,
              private localStorageService: LocalStorageService,
              private pubSubService: PubSubService,
  public localizationService: LocalizationService
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

  createUserOk(resp)
  {
    this.localStorageService.add('user',resp.data);
    this.pubSubService.publish("login", resp.data);
    this.router.navigate(['/home']);
    // this.router.navigate(['/home'], { queryParams: { returnUrl: 'sd' }});
  }

  loginFailure()
  {

  }

  // private handleError(error) {
  //   console.error('Error processing action', error);
  // }

  markAsDirty(ctrlName, dirty = true){
    this.currentForm.controls[ctrlName].markAsDirty({onlySelf:dirty});
  }

  validateInput(ctrlName){
    this.currentForm.controls[ctrlName].markAsDirty();
    return this.currentForm.controls[ctrlName].valid;
  }

  async submitForm()
  {
    this.uiMessage = '';

    var isOk  = true;
    var isCtrlValid  =false;
    isCtrlValid = this.validateInput('firstName');
    if(!isCtrlValid){isOk = false;}
    isCtrlValid = this.validateInput('lastName');
    if(!isCtrlValid){isOk = false;}
    isCtrlValid = this.validateInput('phone');
    if(!isCtrlValid){isOk = false;}

    if(this.user.userOrCompany == 0){
      this.markAsDirty('numeFirma',false);
      this.markAsDirty('allowLogo',false);
    }else{
      this.markAsDirty('numeFirma');
      this.markAsDirty('allowLogo');
    }


    if(!isOk){
      return;
    }

    let formData: FormData = new FormData();

    if(this.user.companyLogo) {
      let fileName = this.user.companyLogo.name;
      if (fileName) {
        formData.append('1', this.user.companyLogo, fileName);
      }
    }

    let proxy: any = {
      module: 'security',
      method: 'updateProfile',
    };

    const newUI: any = { ...this.user};
    delete  newUI.companyLogo;
    formData.append('data', JSON.stringify(newUI));

    formData.append('proxy', JSON.stringify(proxy));
    //formData.append('q', JSON.stringify(q));
    //formData.append('timer', JSON.stringify(this.question.timer));

    // if (this.question.code) {
    //   formData.append('code', this.question.code);
    // }



    const resp = await this.httpService.postFormData("api/private/form", formData);


    const respData = resp.data;
    if(!respData.success){

      this.uiMessage = this.localizationService.language[respData.message];
      return;
    }

    this.createUserOk(respData);

    // this.loginOk(loginResponse);

  }

  ngOnDestroy(){
    // if(this.sub) {
    //   this.sub.unsubscribe();
    // }
  }

}
