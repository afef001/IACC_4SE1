import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ResidencesComponent } from './residences/residences.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsResidenceComponent } from './details-residence/details-residence.component';
import { AppartementComponent } from './appartement/appartement.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ResidencesComponent,
    AddResidenceComponent,
    NotFoundComponent,
    DetailsResidenceComponent,
    AppartementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
