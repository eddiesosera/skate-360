import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StockNeeded } from '../../models/functions/data/stockNeeded';

@Injectable({
  providedIn: 'root'
})
export class StockNeededService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:3000/stockNeeded";

  // Location CRUD Functionality
  getAllStockNeeded(): Observable<StockNeeded[]> {
    return this.http.get<any>(this.baseUrl)
  }

  getSingleStockNeeded(id: number): Observable<StockNeeded> {
    return this.http.get<any>(`${this.baseUrl}/${id}`)
  }
}
