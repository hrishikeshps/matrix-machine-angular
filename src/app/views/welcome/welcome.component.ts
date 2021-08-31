import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  authForm!: FormGroup;
  isAuthenticated: boolean = false;
  submitted = false;
  
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authForm = new FormGroup({
      keyword: new FormControl('', Validators.required)
    })
    this.checkAccess()
  }

  get f() {
    return this.authForm.controls;
  }

  grantAccess(): void {
    this.submitted = true;

    if (this.authForm.invalid) {
      return;
    }

    if(this.authForm.value.keyword == 'admin'){
      localStorage.setItem('admin_keyword', 'admin');
      this.isAuthenticated = true;
      this.router.navigate(['/protected']);
    } else {
      alert('Incorrect, Please try again!')
    }
  }

  checkAccess(): void {
    this.isAuthenticated = this.authService.checkAccessRights();
  }

  logout(): void {
    this.isAuthenticated = false;
    this.authService.logout();
  }


}

