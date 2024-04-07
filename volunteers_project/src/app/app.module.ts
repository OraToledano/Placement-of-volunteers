import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './general/app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './general/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ManageVolunteersModule } from './volunteers/manage-volunteers/manage-volunteers.module';
import { SchedulingModule } from './transporrarion-schudule/scheduling/scheduling.module';
import { HomeComponent } from './general/home/home.component';
import { ROUTES, RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CommonModule, ManageVolunteersModule, SchedulingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
