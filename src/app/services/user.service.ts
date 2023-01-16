import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  host: string="http://localhost:8081/users/"; 

  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<Array<User>>{
    return this.http.get<Array<User>>(this.host + "all");
  }

  public searchAppusers(kw: string): Observable<Array<User>>{
    return this.http.get<Array<User>>(this.host + "search?keyword=" + kw);
  }

  public addUser(user: User):Observable<User>{
    return this.http.post<User>(this.host + "all",user);
  }

  public deleteUser(id:number){
    return this.http.delete(this.host + id);
  }
}
