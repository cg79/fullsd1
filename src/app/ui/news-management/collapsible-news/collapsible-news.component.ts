import {Component, OnInit, Input} from '@angular/core';
import {PubSubService} from "../../../services/pubsub/pubsub";
import {Router} from "@angular/router";

@Component({
  selector: 'app-collapsible-news',
  templateUrl: './collapsible-news.component.html',
  styleUrls: ['./collapsible-news.component.scss']
})
export class CollapsibleNewsComponent implements OnInit {

  @Input() newsObject: any;
  @Input() canEditNews: boolean = false;

  btnover:Boolean = false;

  constructor( private pubSub: PubSubService,
               private router: Router) { }



  ngOnInit() {
  }

  onBtnMouseOver(event) {
    this.btnover = true;
    // this.newsObject.btnoverclass = "btnOver1";
    // event.preventDefault();
  }

  onBtnMouseOut(event) {
    this.btnover = false;
    // this.newsObject.btnoverclass = "";
    // console.log('OUT');
    // event.preventDefault();
  }

  edit()
  {
    this.pubSub.setKeyValue('news', this.newsObject);
    this.router.navigate(['/addNews']);
  }
}
