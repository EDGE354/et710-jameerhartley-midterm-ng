import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'geo', component: GeoComponent },
  { path: 'land', component: LandmarksComponent },
  { path: 'act', component: ActivitiesComponent },
  { path: 'house', component: HousingComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'parks', component: ParksComponent },
  { path: 'schools', component: SchoolsComponent },
  { path: 'snd', component: SndComponent },
  { path: 'trans', component: TransportComponent },
  { path: 'cont', component: ContactComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
