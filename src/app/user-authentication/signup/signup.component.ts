import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

function noNumbersAllowed(control: AbstractControl): { [key: string]: boolean } | null {
  if (control.value && control.value.match(/\d/)) {
    return { noNumbersAllowed: true };
  }
  return null;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [MessageService]
})
export class SignupComponent {
  passwordToggleIcon: string = "eye";
  signupForm: FormGroup | undefined;

  constructor(
    private _formBuilder: FormBuilder,
    private _messageService: MessageService,
    public router: Router
  ) {
    this.signupForm = this._formBuilder.group({
      firstName: ['', [
        Validators.required,
        noNumbersAllowed
      ]],
      lastName: ['',[
        noNumbersAllowed
      ]],
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


  signupFormSubmit() {
    if (this.signupForm?.valid) {
      console.log(this.signupForm.value);
    } else {
      const controls = this.signupForm?.controls
      for (const name in controls) {
        if (controls[name].invalid) {
          console.log(name);
        }
      }
      this._messageService.add({ severity: 'error', summary: 'Invalid details provided', detail: 'Refill the form' });
      this.signupForm?.reset();
    }
  }
}
