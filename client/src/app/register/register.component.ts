import { Component } from '@angular/core';
import { AuthenticationService, TokenPayLoad } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './register.component.html'
})
export class RegisterComponent {
    credentials: TokenPayLoad = {
        id: 0,
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    }

    constructor(private auth: AuthenticationService, private router: Router) {}

    register() {
        this.auth.register(this.credentials).subscribe(
            () => {
                this.router.navigateByUrl('/profile');
            },
            err => {
                console.log(err);
            }
        )
    }
}