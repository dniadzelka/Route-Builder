import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	providers: []
})

export class LoginComponent {
	login: string = '';
	password: string = '';

	constructor(private router: Router) {
	}

	doLogIn(): void {
		this.router.navigate(['/map']);
	}
}