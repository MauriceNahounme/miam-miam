import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private token: string | null = null;

    constructor(private http: HttpClient) {
    }

    login(email: string, password: string): Observable<any> {
        const requestBody = {
            email,
            password
        };

        return this.http.post('https://api.escuelajs.co/api/v1/auth/login', requestBody);
    }

    setToken(token: string): void {
        this.token = token;

        localStorage.setItem('token', token);
    }

    getToken(): string | null {
        if (!this.token) {
            this.token = localStorage.getItem('token');
        }

        return this.token;
    }

    isAuthenticated(): boolean {
        return !!this.getToken();
    }

    logout(): void {
        this.token = null;

        localStorage.removeItem('token');
    }
}
