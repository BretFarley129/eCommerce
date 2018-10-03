import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {
    email:'',
    password: '',
  }
  user = '';
  constructor(private _apiService: ApiService, private router: Router) { 
    console.log(this.user)
  }

  ngOnInit() {
  }
  onSubmit(){
    console.log('cool');
    event.preventDefault();
    this._apiService.login(this.login).subscribe(
      (data)=>{
        console.log(data.json())
        this.user = data.json();
        this._apiService.setUser(this.user);
        
      },
    (err)=>{
      console.log(err)
    }
    )
    this.router.navigate(['/']);
  }

}
