import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Skin} from '../../models/functions/data/skin.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardSkinService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:3000/boardSkins"

  getAllSkins(): Observable<Skin[]> {
    return this.http.get<any>(this.baseUrl)
  }

  getSingleSkin(id: number): Observable<Skin> {
    return this.http.get<any>(`${this.baseUrl}/${id}`)
  }

  createSkin(body: Skin): Observable<Skin> {
    return this.http.post<Skin>(this.baseUrl, body)
  }
}
