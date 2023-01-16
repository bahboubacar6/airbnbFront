import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, throwError} from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  users$!: Observable<Array<User>>;
  errorMessage!: string;
  searchFormGroup: FormGroup | undefined;

  constructor(private userService: UserService, private fb: FormBuilder){}

  ngOnInit(): void {
    this.initForm();
    this.searchUser();
  }

  initForm(){
    this.searchFormGroup = this.fb.group({
      keyword: this.fb.control("")
    })
  }

  searchUser(){
    let kw = this.searchFormGroup?.value.keyword;
    this.users$ = this.userService.searchAppusers(kw).pipe(
      catchError(err=>{
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }

  deleteUser(u:User){
    let conf = confirm("Are you sure?");
    if(!conf) return;
    this.userService.deleteUser(u.idUser).subscribe({
      next:(resp)=>{
        this.users$ = this.users$.pipe(
          map(data=>{
            let index = data.indexOf(u);
            data.slice(index,1);
            return data;
          })
        )
      },
      error:(err)=>{
        console.log(err);
        
      }
    });
  }
}
