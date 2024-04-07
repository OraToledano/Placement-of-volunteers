import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrasportationSchedulingComponent } from '../trasportation-scheduling/trasportation-scheduling.component';
import { SchedulingService } from '../scheduling.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [TrasportationSchedulingComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [SchedulingService]
})
export class SchedulingModule { }
