import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>( false);

  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  constructor() { }

  setLoginStatus(status: boolean) {
    this.isLoggedInSubject.next(status)
  }
}


