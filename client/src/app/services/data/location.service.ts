import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LocationModel } from '../../models/functions/data/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:3000/location";

  // Location CRUD Functionality
  getAllLocations(): Observable<LocationModel[]> {
    return this.http.get<any>(this.baseUrl)
  }

  getSingleLocation(id: number): Observable<LocationModel> {
    return this.http.get<any>(`${this.baseUrl}/${id}`)
  }

  private createLocation(body: LocationModel): Observable<LocationModel> {
    return this.http.post<LocationModel>(this.baseUrl, body)
  }

  private updateLocation(id: number, body: LocationModel): Observable<LocationModel> {
    return this.http.put<LocationModel>(`${this.baseUrl}/${id}`, body)
  }

  private deleteLocation(id: number): Observable<LocationModel> {
    return this.http.delete<LocationModel>(`${this.baseUrl}/${id}`)
  }
}
