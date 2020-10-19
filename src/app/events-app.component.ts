import { Component } from '@angular/core';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'events-app',
 // templateUrl: './app.component.html',
 template:`
 <nav-bar>  </nav-bar>
  <events-list>  </events-list>  
 `,
 styles:[`
 .nav.navbar-nav { font-size: 15px; }
  #searchForm { margin-right: 100px; }
  @media (max-width: 1200px) { #searchForm{ display } } 
  `]
})
export class EventsAppComponent {
  title = 'ngfund1';
}