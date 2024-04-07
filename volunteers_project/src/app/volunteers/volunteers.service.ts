import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Volunteer } from './volunteer.model'

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class VolunteersService {
  constructor(private http: HttpClient) { }
  
  getAllVolunteers = (): Observable<Volunteer[]> => {
    return this.http.get<Volunteer[]>('/volunteersList');
  }

  getVolunteerById(id: string): Observable<Volunteer> {
    return this.http.get<Volunteer>(`/volunteersList/${id}`);
  }

  updateVolunteer(id: string, v: Volunteer): Observable<Volunteer[]> {
    return this.http.put<Volunteer[]>(`/volunteersList/update/${id}`, v);
  }
}




