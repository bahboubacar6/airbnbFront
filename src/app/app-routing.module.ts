import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AnnounceComponent } from './components/announce/announce.component';
import { FormReservationComponent } from './components/form-reservation/form-reservation.component';
import { LoginComponent } from './components/login/login.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path:'announce', component:AnnounceComponent},
  {path:'formReserve/:id', component:FormReservationComponent},
  {path: 'accueil', component:AccueilComponent},
  {path:'users', component:UserComponent},
  {path:'addUser', component:AddUserComponent},
  {path:'reservation', component:ReservationComponent},
  {path:'', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
