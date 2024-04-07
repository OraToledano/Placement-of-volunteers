import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { VolunteersListComponent } from '../volunteers/volunteers-list/volunteers-list.component';
import { TrasportationSchedulingComponent } from '../transporrarion-schudule/trasportation-scheduling/trasportation-scheduling.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from '../app.component';
import { HomeComponent } from './home/home.component';
import { VolunteersSchedulingComponent } from '../volunteers/volunteers-scheduling/volunteers-scheduling.component';

const routes: Routes = [
  { path: "volunteers", component: VolunteersListComponent },
  { path: "trasportation schdule", component: TrasportationSchedulingComponent },
  { path: "volunteersdetails/:id", component: VolunteersSchedulingComponent },
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "**", component: PageNotFoundComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
