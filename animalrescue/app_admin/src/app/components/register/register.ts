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
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  registerForm: FormGroup;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private authentication: Authentication,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      name: [
        '',
        Validators.required
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ]
    });
  }

  public onSubmit(): void {

    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.errorMessage = '';

    const user = new User();

    user.name = this.registerForm.value.name;
    user.email = this.registerForm.value.email;

    const password = this.registerForm.value.password;

    this.authentication.register(user, password)
      .subscribe({
        next: (response) => {
          this.authentication.saveToken(response.token);

          window.location.href = '/';
        },

        error: (error) => {
          console.log(error);

          this.errorMessage =
            'Unable to create account.';
        }
      });
  }
}