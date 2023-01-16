import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userFormGroup!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void{
    this.initForm();
  }

  initForm(){
    this.userFormGroup = this.fb.group({
      username: this.fb.control(""),
      password: this.fb.control("")
    })
  }

  login(){
    let user = this.userFormGroup.value.username;
    let pwd = this.userFormGroup.value.password;
  }
}
