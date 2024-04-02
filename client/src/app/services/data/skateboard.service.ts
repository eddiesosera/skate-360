import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Skateboard } from '../../models/functions/data/skateboard.model';

@Injectable({
  providedIn: 'root'
})
export class SkateboardService {
  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:3000/skateboards";

  // Location CRUD Functionality
  getAllSkateboards(): Observable<Skateboard[]> {
    return this.http.get<any>(this.baseUrl)
  }

  getSingleSkateboard(id: number): Observable<Skateboard> {
    return this.http.get<any>(`${this.baseUrl}/${id}`)
  }

  createSkateboard(body: Skateboard): Observable<Skateboard> {
    return this.http.post<Skateboard>(this.baseUrl, body)
  }

  updateSkateboard(id: number, body: Skateboard): Observable<Skateboard> {
    return this.http.put<Skateboard>(`${this.baseUrl}/${id}`, body)
  }

  deleteSkateboard(id: number): Observable<Skateboard> {
    return this.http.delete<Skateboard>(`${this.baseUrl}/${id}`)
  }
}
