import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  submitted = false;
  toastMessage: string | null = null;
  toastType: 'success' | 'error' | null = null;

  onSubmit() {
    if (
      this.userForm.valid &&
      this.userForm.value.password === this.userForm.value.confirmPassword
    ) {
      this.submitted = true;
      this.showToast('Registration successful!', 'success');
      console.log('Form Submitted:', this.userForm.value);

      this.userForm.reset;
    } else {
      this.showToast('Please fix the errors before submitting.', 'error');
    }
  }

  get f() {
    return this.userForm.controls;
  }

  showToast(message: string, type: 'success' | 'error') {
    this.toastMessage = message;
    this.toastType = type;

    setTimeout(() => {
      this.toastMessage = null;
      this.toastType = null;
    }, 3000); // 3 sec later hide
  }
}