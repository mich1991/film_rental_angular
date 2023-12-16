import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAdmin : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  constructor() { }

  verifyAdmin(login:string, password:string): boolean {
    if (login === 'admin' && password === 'admin') {
      this.isAdmin.next(true);
      return true
    } else {
      this.isAdmin.next(false);
      return false
    }
  }

  getIsAdminObs(): Observable<boolean> {
    return this.isAdmin.asObservable()
  }
}
