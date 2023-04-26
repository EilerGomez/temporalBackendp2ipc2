import { Component, ViewChild } from '@angular/core';
import {LoginComponent} from '../../app/login/login.component'
import { Administrador } from '../Modelo/Administrador';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area-administrador',
  templateUrl: './area-administrador.component.html',
  styleUrls: ['./area-administrador.component.css']
})
export class AreaAdministradorComponent {
  @ViewChild(LoginComponent) child: any;

  administrador!:Administrador;
  mostrarAlert:boolean=true;

  constructor(private router:Router){}

  ngOnInit(){
  }

  ngAfterViewInit() {
    this.administrador = this.child.administrador;
    this.mostrarAlert=this.child.mostrarAlert;
  }
  decirHola(){
    console.log("Hola mundo")
    this.router.navigate(["listar"])
  }
  cerrarSesion(){
    this.router.navigate(["login"]);
  }
}
