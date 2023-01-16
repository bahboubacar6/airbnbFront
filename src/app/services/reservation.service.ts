import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../models/resrvation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  host: string="http://localhost:8081/reservations/";

  constructor(private http: HttpClient) { }

  public getAllreservations(): Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.host + "all");
  }

  public addResToUser(reservation: Reservation): Observable<Reservation>{
    return this.http.post<Reservation>(this.host +"all/add", reservation);
  }
}
