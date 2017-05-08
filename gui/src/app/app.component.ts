import {Component, AfterContentInit} from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";

@Component({
	selector: 'atm-project',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: []
})

export class AppComponent implements AfterContentInit {
	private iPadWidthBreakPoint: number = 1024;
	private topNavigationHeight: number = 60;
	public leftContentHeight: number = 0;
	public mainContentHeight: number = 0;
	public sideNavOpened: boolean = true;
	public sideNavAvailable: boolean = true;
	public headerAvailable: boolean = true;

	constructor(public router: Router) {
		this.initSideNav();
		this.initRouterSubscription();
	}

	ngAfterContentInit(): void {
		this.onResize();
	}

	onResize() {
		this.mainContentHeight = this.leftContentHeight = window.innerHeight - this.topNavigationHeight;
		this.initSideNav();
	}

	toggleLeftNavigation(sideNav) {
		sideNav.toggle();
	}

	initRouterSubscription(): void {
		// NavigationEnd, NavigationCancel, NavigationError, RoutesRecognized
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				if (event.url.indexOf('/login') === 0) {
					this.sideNavOpened = false;
					this.sideNavAvailable = false;
					this.headerAvailable = false;
					return;
				}

				if (event.url.indexOf('/map') === 0) {
					this.sideNavOpened = false;
					this.sideNavAvailable = false;
					return;
				}
			}

			this.sideNavOpened = true;
			this.headerAvailable = true;
			this.sideNavAvailable = true;
		});
	}

	initSideNav(): void {
		if (this.sideNavAvailable) {
			if ($(window).width() <= this.iPadWidthBreakPoint) {
				this.sideNavOpened = false;
			} else {
				this.sideNavOpened = true;
			}
		}
	}
}

