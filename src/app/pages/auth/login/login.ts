import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { StepperModule } from 'primeng/stepper';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    CardModule,
    StepperModule
  ],
  providers: [MessageService],
  templateUrl: './login.html'
})
export class Login {

  activeStep: number = 1;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;
    const validEmail = 'admin@demo.com';
    const validPassword = 'Admin@12345';

    if (email === validEmail && password === validPassword) {
      this.messageService.add({
        severity: 'success',
        summary: 'Acceso correcto',
        detail: 'Bienvenida al sistema'
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Credenciales incorrectas'
      });
    }
  }
}
