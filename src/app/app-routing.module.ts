import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnounceComponent } from './components/announce/announce.component';

const routes: Routes = [
  {path:'announce', component:AnnounceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
