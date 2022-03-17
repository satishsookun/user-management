import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';
import {RoutingService} from './services/routing.service';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'user-management';

  constructor(
    private _router: Router,
    private _routingService: RoutingService,
  ) {}

  ngOnInit(): void {
    this._router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: RouterEvent) => {
      this._routingService.configByRoutes(event.url);
    });
  }
}
