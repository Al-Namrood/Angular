import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PoniesComponent } from './pages/ponies/ponies.component';
import { RacesComponent } from './pages/races/races.component';
import { PonyDetailComponent } from './pages/pony-detail/pony-detail.component';
import { RaceDetailComponent } from './pages/race-detail/race-detail.component';
import { LocationRacePipe } from './pipe/location-race.pipe';
import { AddPonyComponent } from './pages/add-pony/add-pony.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AddRaceComponent } from './pages/add-race/add-race.component';
import { AddPonyReactComponent } from './pages/add-pony-react/add-pony-react.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AddRaceReactComponent } from './pages/add-race-react/add-race-react.component';

const ROUTES: Routes = [
  {path:'', component: PoniesComponent},
  {path:'races', component: RacesComponent},
  {path:'add-pony', component: AddPonyReactComponent},
  {path:'update-pony/:id', component: AddPonyComponent},
  {path:'add-race', component: AddRaceComponent},
  {path:'update-race/:id', component: AddRaceComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    PoniesComponent,
    RacesComponent,
    PonyDetailComponent,
    RaceDetailComponent,
    LocationRacePipe,
    AddPonyComponent,
    MenuComponent,
    AddRaceComponent,
    AddPonyReactComponent,
    AddRaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    NgbModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
