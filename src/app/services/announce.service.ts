import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Announce } from '../models/announce.model';

@Injectable({
  providedIn: 'root'
})
export class AnnounceService {

  constructor(private http: HttpClient) { 

  }

  public getAnnonces(): Observable<Announce[]>{
    return this.http.get<Announce[]>("http://localhost:8081/announces/all");
  }
}
