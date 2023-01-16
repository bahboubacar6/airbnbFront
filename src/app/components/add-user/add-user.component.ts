import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  addUserFormGroup: FormGroup|undefined;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router){

  }

  ngOnInit():void{
    this.iniForm();
  }

  iniForm(){
    this.addUserFormGroup = this.fb.group({
      lastName: this.fb.control("", [Validators.required]),
      firstName: this.fb.control("", [Validators.required]),
      email: this.fb.control("", [Validators.required, Validators.email]),
      username: this.fb.control("", [Validators.required, Validators.minLength(4)]),
      password: this.fb.control("", [Validators.required])
    })
  }
  
  addUser(){
    let user: User = this.addUserFormGroup?.value;
    this.userService.addUser(user).subscribe({
      next: (data)=>{
        this.router.navigateByUrl("/users");
      },
      error: (err)=>{
        console.log(err);
        
      }
    });
  }
}
