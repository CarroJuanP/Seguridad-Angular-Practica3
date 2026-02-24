import { Component } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    StepperModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    CardModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  activeStep = 1;

  name = '';
  email = '';
  password = '';

  option1 = false;
  option2 = false;
  option3 = false;
  option4 = false;
  option5 = false;
}
