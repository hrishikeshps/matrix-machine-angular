import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // loggedIn = false;
  // isAdmin = false;

  constructor(private router: Router) {
    // const admin_key = localStorage.getItem('admin_keyword');
    // if (admin_key && admin_key == 'admin') {
    // }
  }

  checkAccessRights(): boolean {
    const admin_key = localStorage.getItem('admin_keyword');
    if (admin_key && admin_key == 'admin') {
      return true;
    }
    return false;
  }

  logout(): void{
    localStorage.removeItem("admin_keyword");
    this.router.navigate(['/']);
  }

}
