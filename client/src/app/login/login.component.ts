import { Component } from '@angular/core';
import { AuthenticationService, TokenPayLoad } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    credentials: TokenPayLoad = {
        id: 0,
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    }

    constructor(private auth: AuthenticationService, private router: Router) {}

    login() {
        this.auth.login(this.credentials).subscribe(
            () => {
                this.router.navigateByUrl('/profile');
            },
            err => {
                console.log(err);
            }
        )
    }
}