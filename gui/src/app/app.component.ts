import {Component, AfterContentInit} from '@angular/core';

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

	constructor() {
		this.initSideNav();
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

	initSideNav(): void {
		if ($(window).width() <= this.iPadWidthBreakPoint) {
			this.sideNavOpened = false;
		} else {
			this.sideNavOpened = true;
		}
	}
}

