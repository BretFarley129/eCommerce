import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user={
    admin:''
  };
  constructor(private _apiService: ApiService, private router: Router) { }

  ngOnInit() {
    var temp = this._apiService.getUser();
    if (temp){
      console.log('user found');
      this.user = temp
    }
    console.log(this.user)
  }
 
}
