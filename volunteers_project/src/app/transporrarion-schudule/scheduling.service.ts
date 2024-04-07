import { Observable } from 'rxjs';
import { Volunteer } from '../volunteers/volunteer.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SchedulingService {

  constructor(private http: HttpClient) { }


  getVolunteerByDay = (day: number): Observable<Volunteer[]> => {
    return this.http.get<Volunteer[]>(`/volunteersList/getByDay/${day}`);

  }

  getAllVolunteers = (): Observable<Volunteer[]> => {
    return this.http.get<Volunteer[]>('/volunteersList');
  }

  getSchedule = (): Observable<Volunteer[]> => {
    return this.http.get<Volunteer[]>(`/Schduling`);
  }

  saveThisWeek = (selectedVolunteer: Volunteer[]): Observable<Volunteer[]> => {
    return this.http.put<Volunteer[]>(`/Schduling/updateSchedule`, selectedVolunteer);
  }

}
