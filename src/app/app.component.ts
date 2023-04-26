import { Component, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import {LoginComponent} from './login/login.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild(LoginComponent) login: any;
  title = 'proyect2IPC2';
  mostrar:boolean = true;
  constructor(private router:Router){
    this.mostrar=true
  }
 
  ngOnInit(): void {
    this.router.navigate(["areaAdministrador"]);
  }
  
  Listar(){
    this.mostrar=!this.mostrar;
    this.router.navigate(['login']);
  }
 
    
  

  

  
}
