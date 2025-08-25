import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../users.service'; // ঠিক path দিন

@Component({
  selector: 'app-mongouser',
  templateUrl: './mongouser.component.html',
  styleUrls: ['./mongouser.component.css'],
})
export class MongouserComponent implements OnInit {
  userForm: FormGroup;
  successMessage: string = '';

  constructor(private userService: UsersService) {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required,Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.userForm.valid) {
      this.userService.createUser(this.userForm.value).subscribe({
        next: (res: any) => {
          this.successMessage = res.message;
          this.userForm.reset();
        },
        error: (err) => {
          console.error('Error:', err);
          this.successMessage = '❌ Something went wrong!';
        },
      });
    }
  }
}
