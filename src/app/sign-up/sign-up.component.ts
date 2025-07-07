import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';


const ApiURL = 'https://686af386e559eba908713838.mockapi.io/users'
@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  formSignUp = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('')
  }, [this.isMissMatch]);

  


  isMissMatch(control: AbstractControl): ValidationErrors | null {
    if (control.get('password')?.value !== control.get('confirmPassword')?.value) {
      return { passwordMissMatch: true };
    }

    return null;
  }

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.formSignUp.valid) {
      const userData = this.formSignUp.value;
      this.http.post(ApiURL, userData)
        .subscribe(response => {
          console.log('Usuario registrado:', response);
          alert('Usuario registrado con éxito');
          this.formSignUp.reset();
        });
    }
  }
}
