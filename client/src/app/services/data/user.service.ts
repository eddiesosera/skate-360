import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/functions/data/user.model';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:3000/users";

  getAllUsers(): Observable<User[]> {
    return this.http.get<any>(this.baseUrl)
  }

  getSingleUser(id: number): Observable<User> {
    return this.http.get<any>(`${this.baseUrl}/${id}`)
  }

  createUser(id: number, body: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/${id}`, { body })
  }

  updateUser(body: User): Observable<User> {
    return this.http.put<User>(this.baseUrl, { body })
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.baseUrl}/${id}`)
  }


}
