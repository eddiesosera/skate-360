import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Truck } from '../../models/functions/data/truck.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrucksService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:3000/trucks";

  getAllTrucks(): Observable<Truck[]> {
    return this.http.get<any>(this.baseUrl)
  }

  getSingleTruck(id: number): Observable<Truck> {
    return this.http.get<any>(`${this.baseUrl}/${id}`)
  }

  createTruck(body: Truck): Observable<Truck> {
    return this.http.post<Truck>(this.baseUrl, body)
  }

}
