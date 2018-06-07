import { Component, OnInit } from '@angular/core';
import {LocalizationService} from "../../services/localization/localization.service";

@Component({
  selector: 'app-instruire-details',
  templateUrl: './instruire-details.component.html',
  styleUrls: ['./instruire-details.component.scss']
})
export class InstruireDetailsComponent implements OnInit {

  constructor(public localizationService: LocalizationService) { }

  ngOnInit() {
  }

}
