import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VolunteersListComponent } from '../volunteers-list/volunteers-list.component';
import { VolunteersSchedulingComponent } from '../volunteers-scheduling/volunteers-scheduling.component';
import { VolunteersService } from '../volunteers.service';
import { SchedulingService } from 'src/app/transporrarion-schudule/scheduling.service';

@NgModule({
  declarations: [VolunteersListComponent, VolunteersSchedulingComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule], 
  providers: [VolunteersService,SchedulingService]
})
export class ManageVolunteersModule { }