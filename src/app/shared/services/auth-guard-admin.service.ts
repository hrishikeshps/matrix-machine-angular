import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdmin implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    const admin_key = localStorage.getItem('admin_keyword');
    if (admin_key && admin_key == 'admin') {
      return true;
    }
    this.router.navigate(['/403']);
    return false;
  }

}
