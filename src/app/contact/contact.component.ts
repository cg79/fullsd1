import {Component, OnInit, TemplateRef, EventEmitter, Output} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {LocalizationService} from "../services/localization/localization.service";
import {LocalStorageService} from "angular-2-local-storage";
import { HttpWrapperService } from '../services/http/httpService';
import {NotificationsService} from "angular2-notifications";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [BsModalService]
})
export class ContactComponent implements OnInit {
  @Output() action = new EventEmitter();

   user: any = {
    name: '',
    email: '',
    message: ''
  };
  constructor(public bsModalRef: BsModalRef,
              public localizationService: LocalizationService,
              private localStorageService: LocalStorageService,
              private httpService: HttpWrapperService,
              protected notificationsService: NotificationsService ) { }

  ngOnInit() {
    const localStorageUser = this.localStorageService.get('user');
    if (localStorageUser) {
      this.user = {...localStorageUser};
    }
  }

  public clickOk() {
    //https://github.com/valor-software/ngx-bootstrap/issues/2290
    if (!this.user.message) {
      return;
    }
    const request = {
      proxy: {
        method : 'addContactMessage',
        module: 'messages'
      },
      data: {
        message: this.user.message,
        email: this.user.email,
        title: this.user.title
      }
    };

    // this.action.emit(true);
    const xxx = this.httpService.postJson('api/pub', request);
    this.bsModalRef.hide();
    const toast = this.notificationsService.success(this.localizationService.language.contactFrm.sent, '', {
      timeOut: 2000,
      showProgressBar: false,
      pauseOnHover: false,
      clickToClose: false
    });
    // this.notificationsService.remove();

  }

}
