import { Component } from '@angular/core';
import { Reservation } from 'src/app/models/resrvation.model';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {

  reservations: Reservation[]=[];

  constructor(private reserService: ReservationService){}

  ngOnInit(): void {
    this.reserService.getAllreservations().subscribe({
      next: (data)=>{
        console.log(data);
        
        this.reservations = data;
      },
      error: (err)=>{
        console.log(err);
        
      }
    });
  }
}
