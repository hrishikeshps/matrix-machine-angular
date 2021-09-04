import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  toggleButton: any;
  navbar: any;
  sidebarVisible: boolean = false;

  constructor(private eleRef: ElementRef) { }

  ngOnInit(): void {
    this.toggleButton = document.getElementsByClassName('navbar-toggler')[0];
    this.navbar = document.getElementsByClassName('navbar-collapse')[0];
  }

  toggleNav(): void {
    this.sidebarVisible = this.sidebarVisible == false ? true : false;
    if(this.sidebarVisible == false){
      this.closeNav();
    } else {
      this.openNav();
    }
  }

  openNav(): void {
    this.navbar.classList.add('show');
  }

  closeNav(): void {
    this.navbar.classList.remove('show');
  }



}
