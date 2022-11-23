import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GeoComponent } from './geo/geo.component';
import { LandmarksComponent } from './landmarks/landmarks.component';
import { ActivitiesComponent } from './activities/activities.component';
import { HousingComponent } from './housing/housing.component';
import { DemoComponent } from './demo/demo.component';
import { ParksComponent } from './parks/parks.component';
import { SchoolsComponent } from './schools/schools.component';
import { SndComponent } from './snd/snd.component';
import { TransportComponent } from './transport/transport.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    GeoComponent,
    LandmarksComponent,
    ActivitiesComponent,
    HousingComponent,
    DemoComponent,
    ParksComponent,
    SchoolsComponent,
    SndComponent,
    TransportComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
