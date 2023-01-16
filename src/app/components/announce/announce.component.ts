import { Component } from '@angular/core';
import { Announce } from 'src/app/models/announce.model';
import { AnnounceService } from 'src/app/services/announce.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-announce',
  templateUrl: './announce.component.html',
  styleUrls: ['./announce.component.css']
})
export class AnnounceComponent {

  annonces: Announce[] = [];
  constructor(private annonceSer: AnnounceService, private resService: ReservationService, private router: Router) { }

  ngOnInit(): void {
    this.annonceSer.getAnnonces().subscribe({
      next: (data)=>{
        this.annonces = data;
      },
      error: (err)=>{
        console.log(err);
        
      }
    })
  }

  detailReservation(annonce: Announce){
    this.router.navigateByUrl("/formReserve/"+annonce.idAnnounce, {state:annonce});
  }
}


