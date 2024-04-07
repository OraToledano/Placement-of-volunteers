import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VolunteersService } from '../volunteers.service';
import { Volunteer } from '../volunteer.model';
import { Router } from '@angular/router';
import { SchedulingService } from 'src/app/transporrarion-schudule/scheduling.service';

@Component({
  selector: 'app-volunteers-scheduling',
  templateUrl: './volunteers-scheduling.component.html',
  styleUrls: ['./volunteers-scheduling.component.css']
})
export class VolunteersSchedulingComponent implements OnInit {
  volunteerId?: string;
  selectedVolunteer?: Volunteer;
  detailsForm: FormGroup;
  daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  constructor(private route: ActivatedRoute, private volunteersService: VolunteersService, private router: Router, private _scheduleService: SchedulingService) {
    this.detailsForm = new FormGroup({
      _id: new FormControl(),
      first_name: new FormControl(),
      last_name: new FormControl(),
      phone: new FormControl(),
      sun: new FormControl(),
      mon: new FormControl(),
      thu: new FormControl(),
      wen: new FormControl(),
      tur: new FormControl(),
      fri: new FormControl()

    });
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.volunteerId = params['id'];
      if (this.volunteerId)
        this.getVolunteerDetails(this.volunteerId);
    }
    );

  }
  getVolunteerDetails(id: string) {
    this.volunteersService.getVolunteerById(id).subscribe(
      data => {
        this.selectedVolunteer = data;
        this.detailsForm.patchValue({
          _id: this.selectedVolunteer.id,
          first_name: this.selectedVolunteer.firstName,
          last_name: this.selectedVolunteer.lastName,
          phone: this.selectedVolunteer.tel,
          sun: this.selectedVolunteer.availability[0],
          mon: this.selectedVolunteer.availability[1],
          thu: this.selectedVolunteer.availability[2],
          wen: this.selectedVolunteer.availability[3],
          tur: this.selectedVolunteer.availability[4],
          fri: this.selectedVolunteer.availability[5]

        });

      },
      error => {
        console.log('Error getting volunteer details:', error);
      }
    );
  }

  saveVolunteer() {
    let num=0;
    let flug: boolean = false;
    if (this.selectedVolunteer) {
      this.selectedVolunteer.firstName = this.detailsForm.get('first_name')?.value;
      this.selectedVolunteer.lastName = this.detailsForm.get('last_name')?.value;
      this.selectedVolunteer.tel = this.detailsForm.get('phone')?.value;
      let tempVolunteer: Volunteer[] = new Array<Volunteer>;

      this._scheduleService.getSchedule().subscribe(
        data => {
          tempVolunteer = data;
          if (this.detailsForm.get('sun')?.value == false && tempVolunteer[0]!=null ) {
            if(tempVolunteer[0].id == this.detailsForm.get("_id")?.value){
            alert("youYou cannot cancel this day because you have already assigned this day");
            flug = true;
            num=0;}
          }
          if (this.detailsForm.get('mon')?.value == false && tempVolunteer[1]!=null ) {
            if(tempVolunteer[1].id == this.detailsForm.get("_id")?.value){
            alert("you cant do this");
            flug = true;
            num=1;}
          }
          if (this.detailsForm.get('thu')?.value == false && tempVolunteer[2]!=null ) {
            if(tempVolunteer[2].id == this.detailsForm.get("_id")?.value){
            alert("you cant do this");
            flug = true;
            num=2;}
          }
          if (this.detailsForm.get('wen')?.value == false && tempVolunteer[3]!=null ) {
            if(tempVolunteer[3].id == this.detailsForm.get("_id")?.value){
            alert("you cant do this");
            flug = true;
            num=3;}
          }
          if (this.detailsForm.get('tur')?.value == false && tempVolunteer[4]!=null ) {
            if(tempVolunteer[4].id == this.detailsForm.get("_id")?.value){
            alert("you cant do this");
            flug = true;
            num=4;}
          }
          if (this.detailsForm.get('fri')?.value == false && tempVolunteer[5]!=null ) {
            if(tempVolunteer[5].id == this.detailsForm.get("_id")?.value){
            alert("you cant do this");
            flug = true;
            num=5;}
          }
          console.log("flag = "+flug)
          if (flug == false) {
            this.selectedVolunteer!.availability[0] = this.detailsForm.get('sun')?.value;
            this.selectedVolunteer!.availability[1] = this.detailsForm.get('mon')?.value;
            this.selectedVolunteer!.availability[2] = this.detailsForm.get('thu')?.value;
            this.selectedVolunteer!.availability[3] = this.detailsForm.get('wen')?.value;
            this.selectedVolunteer!.availability[4] = this.detailsForm.get('tur')?.value;
            this.selectedVolunteer!.availability[5] = this.detailsForm.get('fri')?.value;

            this.volunteersService.updateVolunteer((String)(this.selectedVolunteer?.id), this.selectedVolunteer!)
              .subscribe(
                (data) => {
                  console.log('Volunteer updated successfully!');
                  this.router.navigate(['volunteers']);
                },
                error => {
                  console.log('Error updating volunteer:', error);
                }
              );
          }
          else{
            window.location.reload();
          }
        },
        error => {
          console.log('Error getting volunteer details:', error);
        });
    }
  }
}
