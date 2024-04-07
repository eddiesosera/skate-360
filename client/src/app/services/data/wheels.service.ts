import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wheel } from '../../models/functions/data/wheel.model';

@Injectable({
  providedIn: 'root'
})
export class WheelsService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:3000/wheels"

  getAllWheels(): Observable<Wheel[]> {
    return this.http.get<any>(this.baseUrl)
  }

  getSingleWheel(id: number): Observable<Wheel> {
    return this.http.get<any>(`${this.baseUrl}/${id}`)
  }

  createWheel(body: Wheel): Observable<Wheel> {
    return this.http.post<Wheel>(this.baseUrl, body)
  }
}
