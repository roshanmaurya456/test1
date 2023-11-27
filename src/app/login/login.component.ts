import { Component } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  title ='Reactive Login Form';
  loginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  })

click()
{
 console.log(this.loginForm.value)
};
}

