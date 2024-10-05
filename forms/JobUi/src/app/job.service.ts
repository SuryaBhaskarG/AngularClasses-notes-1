import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from './job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private apiUrl = 'http://localhost:8080/saveApplication'; // Your backend API URL

  constructor(private http: HttpClient) {}

  saveJob(job: Job): Observable<Job> {
    return this.http.post<Job>(this.apiUrl, job);
  }
}
