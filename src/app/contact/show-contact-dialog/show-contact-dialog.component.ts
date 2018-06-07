import { Component, OnInit } from '@angular/core';
import {BsModalService, BsModalRef} from "ngx-bootstrap";
import {ContactComponent} from "../contact.component";
import {LocalizationService} from "../../services/localization/localization.service";

@Component({
  selector: 'app-show-contact-dialog',
  templateUrl: './show-contact-dialog.component.html',
  styleUrls: ['./show-contact-dialog.component.scss']
})
export class ShowContactDialogComponent implements OnInit {

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService,  public localizationService: LocalizationService) { }

  ngOnInit() {
  }

  showContactDlg() {
    this.bsModalRef = this.modalService.show(ContactComponent, {class: 'modal-lg'});
     this.bsModalRef.content.title = '';

    this.bsModalRef.content.action.take(1).subscribe((value) => {
      console.log(value); // here you will get the value
    });
  }


}
