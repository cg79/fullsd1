import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  private user: any;
  constructor (private localStorageService: LocalStorageService)
  {
    this.user = localStorageService.get('user');
    // if(!this.user)
    // {
    //   this.user = {name: 'john'};
    // }
  }

  logout()
  {
    if(this.user)
    {
      this.localStorageService.remove('user');
      this.user = null;
    }
  }

}
