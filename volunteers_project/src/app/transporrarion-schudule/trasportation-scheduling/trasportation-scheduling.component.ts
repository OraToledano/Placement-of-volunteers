import { Component, OnInit } from '@angular/core';
import { Volunteer } from 'src/app/volunteers/volunteer.model';
import { SchedulingService } from '../scheduling.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Schedule } from '../schedulingModel';

@Component({
  selector: 'app-trasportation-scheduling',
  templateUrl: './trasportation-scheduling.component.html',
  styleUrls: ['./trasportation-scheduling.component.css']
})
export class TrasportationSchedulingComponent implements OnInit {
  dataLoaded: boolean = false; 
  scheduleForm: FormGroup;
  finalSchedule: Volunteer[];
  scheduleForSelect: Schedule[];

  constructor(private _SchedulingService: SchedulingService) {
    this.scheduleForm = new FormGroup({});
    this.scheduleForSelect = new Array<Schedule>();
    this.finalSchedule = new Array<Volunteer>();

  }

  ngOnInit(): void {

    this._SchedulingService.getSchedule().subscribe(s => {
      this.finalSchedule = s;
      console.log("hi ora" + this.finalSchedule);
      for (let i = 0; i < 6; i++) {
        console.log("ora good luck");
        this.scheduleForSelect[i] = new Schedule();
        this.getVolunteersByDay(i);
      }
      if (this.finalSchedule) {
        this.scheduleForm = new FormGroup({
          sunday: new FormControl(this.finalSchedule[0]),
          monday: new FormControl(this.finalSchedule[1]),
          tuesday: new FormControl(this.finalSchedule[2]),
          wednesday: new FormControl(this.finalSchedule[3]),
          thursday: new FormControl(this.finalSchedule[4]),
          friday: new FormControl(this.finalSchedule[5])
        });
        console.log("הנתונים שקיבל")
        console.log(JSON.stringify(this.finalSchedule[0]));
        console.log(JSON.stringify(this.finalSchedule[1]));
        console.log(JSON.stringify(this.finalSchedule[2]));
        console.log(JSON.stringify(this.finalSchedule[3]));
        console.log(JSON.stringify(this.finalSchedule[4]));
        console.log(JSON.stringify(this.finalSchedule[5]));
        this.dataLoaded = true;

      }

    }
    );






  }

  getVolunteersByDay = (day: number) => {
    if (!this.scheduleForSelect[day]) {
      this.scheduleForSelect[day] = new Schedule();
    }
    this._SchedulingService.getVolunteerByDay(day).subscribe(
      v_lst => {
        this.scheduleForSelect[day].v = v_lst;
      }

    );
    this.scheduleForSelect[day].id = day;
  }

  saveSchedule = () => {
    if (this.finalSchedule) {
      console.log("sunday : " + JSON.stringify(this.scheduleForm.get("sunday")?.value))
      console.log("monday : " + JSON.stringify(this.scheduleForm.get("monday")?.value))
      this.finalSchedule[0] = this.scheduleForm.get("sunday")?.value;
      this.finalSchedule[1] = this.scheduleForm.get("monday")?.value;
      this.finalSchedule[2] = this.scheduleForm.get("tuesday")?.value;
      this.finalSchedule[3] = this.scheduleForm.get("wednesday")?.value;
      this.finalSchedule[4] = this.scheduleForm.get("thursday")?.value;
      this.finalSchedule[5] = this.scheduleForm.get("friday")?.value;
      this._SchedulingService.saveThisWeek(this.finalSchedule).subscribe(
        (data) => {
          console.log(data);
        },
        error => {
          console.log('Error updating volunteer:', error);
        }
      )
    }
  }
  isVolunteerSelected(dayIndex: number): boolean {
    return this.finalSchedule[dayIndex] != null;
  }


}