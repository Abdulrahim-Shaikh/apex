import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})

export class LoginComponent {
  loginForm: FormGroup | undefined;
  passwordToggleIcon: string = "eye";

  constructor(
    private _formBuilder: FormBuilder,
    private _messageService: MessageService,
    public router: Router
  ) {
    this.loginForm = this._formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
        Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,10}$")
      ]]
    });
  }

  loginFormSubmit() {
    if (this.loginForm?.valid) {
      console.log(this.loginForm.value);
    } else {
      this._messageService.add({ severity: 'error', summary: 'Invalid details provided', detail: 'Refill the form' });
      this.loginForm?.reset();
    }
  }
}
