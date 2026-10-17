import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { Authentication } from '../../services/authentication';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginForm: FormGroup;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private authentication: Authentication,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        '',
        Validators.required
      ]
    });
  }

  public onSubmit(): void {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.errorMessage = '';

    const user = new User();

    user.email = this.loginForm.value.email;

    const password = this.loginForm.value.password;

    this.authentication.login(user, password)
      .subscribe({
        next: (response) => {
          this.authentication.saveToken(response.token);

          window.location.href = '/';
        },

        error: (error) => {
          console.log(error);

          this.errorMessage =
            'Invalid email or password.';
        }
      });
  }
}