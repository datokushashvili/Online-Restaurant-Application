import { Component, OnDestroy } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bar-menu',
  templateUrl: './bar-menu.component.html',
  styleUrls: ['./bar-menu.component.scss']
})
export class BarMenuComponent implements OnDestroy {
  faBars = faBars;
  barMenu: boolean = false;
  private routerSubscription: Subscription;

  constructor(private router: Router) {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.closeBarMenu();
      }
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  showBarMenu() {
    this.barMenu = !this.barMenu;
  }

  closeBarMenu() {
    this.barMenu = false;
  }
}
