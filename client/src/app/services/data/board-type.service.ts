import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BoardType } from '../../models/functions/data/boardtype.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardTypeService {

  constructor( private http: HttpClient) { }

  private baseUrl = "http://localhost:3000/boardType"

  getAllBoardtyps(): Observable<BoardType[]> {
    return this.http.get<any>(this.baseUrl)
  }

  getSingleBoardType(id: number): Observable<BoardType> {
    return this.http.get<any>(`${this.baseUrl}/${id}`)
  }

  createBoardType(body: BoardType): Observable<BoardType> {
    return this.http.post<BoardType>(this.baseUrl, body)
  }
}
