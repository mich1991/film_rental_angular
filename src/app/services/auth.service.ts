import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAdmin : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
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
}
