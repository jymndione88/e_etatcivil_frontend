import { Component, OnInit, OnDestroy , PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { isPlatformBrowser, LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Service-Public.sn';

  constructor(private router: Router){}

  ngOnInit(): void {
 
  }


}
