import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLoggedIn = !!localStorage.getItem('loggedIn');
    if (isLoggedIn) {
      return true;
    } else {
      return this.router.createUrlTree(['/login']); // Redirect to login page if not logged in
    }
  }
}