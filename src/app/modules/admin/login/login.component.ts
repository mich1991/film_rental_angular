import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService)
  router = inject(Router)
  loginForm = this.fb.group({
    login: this.fb.control<string>('', [Validators.required]),
    password: this.fb.control<string>('', [Validators.required])
  })

  onSubmit() {
    console.log(this.loginForm)
    if (this.loginForm.valid) {
      const {login, password} = this.loginForm.value
      const isAdmin = this.authService.verifyAdmin(login!, password!);
      if (isAdmin) {
        this.router.navigate(['admin', 'panel'])
      }
    }
  }
}

