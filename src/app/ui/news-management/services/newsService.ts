import {Injectable} from '@angular/core';

import {HttpWrapperService} from "../../../services/http/httpService";
import {UtilsService} from "../../../services/utils/utilsService";
import {PubSubService} from "../../../services/pubsub/pubsub";
import {INewsType} from "./INewsType";

@Injectable()
export class NewsService {


  constructor(private httpService: HttpWrapperService,
              private utilsService: UtilsService
  )
  {
  }

  async getNews(newsType, dateValue)
  {
    if(!dateValue)
    {
      dateValue = new Date;
    }
    const body :any = {};
    body.proxy = {
      module: 'news',
      method: 'getNews',
    };
    body.data = {
      filter:{
        newsType:newsType,
        date: dateValue,
        mili:this.utilsService.date.dateToUtcMilliSecconds(dateValue)
      }
    };
    const newsDbData =  await this.httpService.postJson('api/pub/', body);

    if(!newsDbData.data)
    {
      return null;
    }

    const newsObject = newsDbData.data;


    const newsDate = new Date(newsObject.date.jsdate);
    newsObject.date.date ={
      year: newsDate.getFullYear(),
      month:newsDate.getMonth()+1,
      day:newsDate.getDate()
    };

    return newsObject;

  }

  async getAllNews(option, dateValue)
  {
    if(!dateValue)
    {
      dateValue = new Date;
    }
    const body :any = {};
    body.proxy = {
      module: 'news',
      method: 'getAllNews',
    };
    body.data = {
      filter:{
        newsType:option.newsType,
        date: dateValue,
        mili:this.utilsService.date.dateToUtcMilliSecconds(dateValue)
      }
    };
    // console.log(body);
    const newsDbData =  await this.httpService.postJson('api/pub', body);

    if(!newsDbData.data)
    {
      return null;
    }

    const newsRecords = newsDbData.data;
    let newsObject = null;

    for(var i=0;i<newsRecords.length;i++)
    {
      newsObject = newsRecords[i];

      const newsDate = new Date(newsObject.date.jsdate);
      newsObject.date.date ={
        year: newsDate.getFullYear(),
        month:newsDate.getMonth()+1,
        day:newsDate.getDate()
      };
    }


    return newsRecords;

  }

  async getPagedSolutionsForAExercise(option)
  {

    const body :any = {};
    body.proxy = {
      module: 'news',
      method: 'getPagedSolutionsForAExercise',
    };
    body.data = option;
    // console.log(body);
    const newsDbData =  await this.httpService.postJson('api/pub', body);



    return newsDbData;

  }



}
