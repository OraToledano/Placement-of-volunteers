import { Component, OnInit } from '@angular/core';
import { VolunteersService } from '../volunteers.service';
import { Volunteer } from '../volunteer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteers-list',
  templateUrl: './volunteers-list.component.html',
  styleUrls: ['./volunteers-list.component.css']
})

export class VolunteersListComponent {

  _volunteerlist?: Volunteer[];
  ngOnInit(): void {
    this.volunteersService.getAllVolunteers().subscribe(volunteerList => { this._volunteerlist = volunteerList; })

  }

  constructor(private volunteersService: VolunteersService, private router: Router) {
    console.log("in volunteer list");
  }
  selectVolunteer(volunteer: Volunteer) {
    this.router.navigate(['/volunteersdetails', volunteer.id]);
  }
}
