
import { Component } from '@angular/core';import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StepperModule } from 'primeng/stepper'; // 👈 ESTE FALTABA

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    RouterModule,
    CardModule,
    StepperModule // 👈 AGREGAR AQUÍ
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  activeStep = 1;
  email = '';
  password = '';

  login() {
    console.log(this.email, this.password);
  }

}
