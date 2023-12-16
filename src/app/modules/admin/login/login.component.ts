import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {take} from "rxjs";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  fb = inject(FormBuilder).nonNullable;
  authService = inject(AuthService)
  router = inject(Router)
  isAdmin: boolean = false;
  loginForm = this.fb.group({
    login: this.fb.control<string>('', [Validators.required]),
    password: this.fb.control<string>('', [Validators.required])
  })

  ngOnInit() {
    this.authService.getIsAdminObs().pipe(take(1)).subscribe(isAdmin => {
      if (isAdmin) {
        this.isAdmin = isAdmin;
        this.router.navigate(['admin', 'panel']);
      }
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('valid');
      const {login, password} = this.loginForm.value;
      if (this.authService.verifyAdmin(login!, password!)) {
        console.log('success')
        this.router.navigate(['admin', 'panel'])
      }
    }
  }
}

