import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/main.component';
import { ResidencesComponent } from './residences/residences.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsResidenceComponent } from './details-residence/details-residence.component';
import { AppartementComponent } from './appartement/appartement.component';

const routes: Routes = [
  {path:'', redirectTo:"home", pathMatch:"full"},
  {path:'home', component: HomeComponent},
  {path:'appartement', component:AppartementComponent},
  {path:'residences/appartement', component:AppartementComponent},
  {path:'residences', component:ResidencesComponent,
  children:[{path:'add', component:AddResidenceComponent},
  {path: 'details/:x', component:DetailsResidenceComponent}]
  }, 
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
