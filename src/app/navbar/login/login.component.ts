import { LoginService } from './../../login.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  _login(): void {
    this.loginFunction.login();
  }


  _logout(): void {
    this.loginFunction.logout();
  }

  _isAuthed(): boolean {
    return this.loginFunction.authenticated;    

  }


  _handleAuth(){

    this.loginFunction.handleAuth();
    
  };
  


  constructor(public loginFunction: LoginService) {


    
  }



  ngOnInit(): void {

    this._handleAuth();
     
  };    
  
}
