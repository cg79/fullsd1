import { Component, OnInit } from '@angular/core';
import {utils} from "protractor";
import {Router} from "@angular/router";
import {LocalStorageService} from "angular-2-local-storage";
import Permissions from "../../facade/permissions";
import NewsType from "../../facade/newsTypes";
import {HttpWrapperService} from "../../services/http/httpService";
import {UtilsService} from "../../services/utils/utilsService";
import {PubSubService} from "../../services/pubsub/pubsub";
import {NewsService} from "../news-management/services/newsService";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private httpService: HttpWrapperService,
              private utilsService: UtilsService,
              private pubSub: PubSubService,
              private router: Router,
              private localStorageService: LocalStorageService,
              private newsService: NewsService
  ) {
    this.user = localStorageService.get('user');
  }
  user: any = null;

  canEditNews: boolean = false;

  async ngOnInit() {
    await this.getNews(new Date());
    let userPermission : number = 0;
    if(this.user) {
      userPermission = this.user.permission;
    }
    this.canEditNews = ((userPermission & Permissions.Roles.EditNews) === Permissions.Roles.EditNews);
  }

  newsObject : any = {};
  newsRecords: Array<any> = [];

  externalConfig: any = {
    lineNumbers: false
  };

  async previewsNews()
  {
    let date: Date = new Date();
    if(this.newsObject && this.newsObject.date)
    {
      date = new Date(this.newsObject.date.jsdate);
    }
    date.setSeconds(date.getSeconds() -1);
    this.getNews(date);
  }

  async getNews(dateValue)
  {
    this.newsRecords = await this.newsService.getAllNews( { newsType:NewsType.newsType.course }, dateValue);
  }



  edit()
  {
    this.pubSub.setKeyValue('news', this.newsObject);
    this.router.navigate(['/addNews']);
  }

}
