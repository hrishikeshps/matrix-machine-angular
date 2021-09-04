import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd, Event as NavigationEvent } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import { filter } from 'rxjs/operators';

import { NavbarComponent } from './shared/layout/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'matrix-machine-angular';

  @ViewChild(NavbarComponent) navbar!: NavbarComponent;

  constructor(private router: Router, private element: ElementRef) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEvent) => {
        if (!this.navbar) return;
        this.navbar.toggleNav();
      });
  }
}
