import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Announce } from 'src/app/models/announce.model';
import { ReservationToUser } from 'src/app/models/resrvation.model';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-form-reservation',
  templateUrl: './form-reservation.component.html',
  styleUrls: ['./form-reservation.component.css']
})
export class FormReservationComponent {

  idAnnounce!: number;
  announce!: Announce;
  reservationFormGroup!: FormGroup; 

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private resService: ReservationService){
    this.announce = this.router.getCurrentNavigation()?.extras.state as Announce;
  }

  ngOnInit(): void {
    this.idAnnounce = this.route.snapshot.params['id'];
    this.initForm();
  }

  initForm(){
    this.reservationFormGroup = this.fb.group({
      startDate: this.fb.control(null),
      endDate: this.fb.control(null)
    })
  }

  addResrUser(annonce: Announce){
    console.log(this.reservationFormGroup.value.startDate);
    console.log(this.reservationFormGroup.value.endDate);
    
    let reservation: ReservationToUser = new ReservationToUser;

    reservation.idAnnounceDTO = annonce.idAnnounce;
    reservation.idAppUserDTO = 3;// TODO 
    reservation.typeReservation = annonce.typeAnnounce;
    reservation.startDate = this.reservationFormGroup.value.startDate;
    reservation.endDate = this.reservationFormGroup.value.endDate;
    reservation.image = annonce.image;
    reservation.price = annonce.price;
    reservation.description = annonce.description;

    this.resService.addResToUser(reservation).subscribe({
      next: (data)=>{
        console.log("Reservation ajout a la liste des reservation ");
        console.log(data);
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }
}
