import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from './job';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobserviceService {

  private apiUrl = 'http://localhost:8080/saveApplication'; // Your backend API URL

  constructor(private http: HttpClient) {}

  saveJob(job: Job): Observable<Job> {
    return this.http.post<Job>(this.apiUrl, job);
  }
}
