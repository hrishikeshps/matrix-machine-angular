import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { ApiService } from '../../shared/services/api.service';

import { User } from '../../shared/models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  headers: any = [
    'Id','Name','Email','Gender','Status','Image'
  ]
    
  users: User[] = [];
  constructor(private apiService: ApiService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getUsers();
  }

  getUsers(): void {
    this.apiService.getUsers().subscribe(
      res => {
        const user_res: any = res.data;
        this.users = user_res;
        this.spinner.hide();
      },
      error => console.log(error)
    );
  }
}
