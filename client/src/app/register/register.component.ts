import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {
    first: '',
    last: '',
    email: '',
    password: '',
    confirm: '',
    admin: '',
  }
  constructor(private _apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(){
    event.preventDefault();
    console.log('cool');
    this._apiService.register(this.user);
    this.router.navigate(['/']);
  }

}
