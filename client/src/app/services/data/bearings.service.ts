import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bearing } from '../../models/functions/data/bearings.model';


@Injectable({
  providedIn: 'root'
})
export class BearingsService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:3000/bearings";

  getAllBearings(): Observable<Bearing[]> {
    return this.http.get<any>(this.baseUrl)
  }

  getSingleBearings(id: number): Observable<Bearing>{
    return this.http.get<any>(this.baseUrl)
  }

  createBearing(body: Bearing): Observable<Bearing> {
    return this.http.post<Bearing>(this.baseUrl, body)
  }
}
