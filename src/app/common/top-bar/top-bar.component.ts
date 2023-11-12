import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";
import { LoginStatusService } from 'src/app/auth/login-status.service';
import { OnInit } from '@angular/core';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
    hideLogout : boolean = false;

    ngOnInit(): void {
        this.loginStatusService.isLoggedIn$.subscribe((isLoggedIn) => {
            this.hideLogout = isLoggedIn;
        })
    }
    constructor(private router: Router, private authService: AuthService, private loginStatusService: LoginStatusService) {
    }

    navigateToHome() {
        this.router.navigate(['/']);
    }

    navigateToUsers() {
        this.router.navigate(['/users']);
    }

    navigateToMeals() {
        this.router.navigate(['/meals']);
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
        this.loginStatusService.setLoginStatus(false);
    }
}
