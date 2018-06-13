import { Component, OnInit } from '@angular/core';
import {LocalizationService} from "../../services/localization/localization.service";

@Component({
  selector: 'app-whoweare',
  templateUrl: './whoweare.component.html',
  styleUrls: ['./whoweare.component.scss']
})
export class WhoweareComponent implements OnInit {

  constructor(public localizationService: LocalizationService  ) { }

  ngOnInit() {
  }

}
