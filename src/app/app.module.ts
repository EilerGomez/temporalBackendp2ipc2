import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListarComponent } from './Especialidadades/listar/listar.component';
import {FormsModule} from '@angular/forms'
import {ServiceService} from './Service/service.EspecialidadesMedicas'
import {HttpClientModule} from '@angular/common/http';
import { CargaDatosComponent } from './carga-datos/carga-datos.component'
import {LoginService} from './Service/login.service';
import { AreaAdministradorComponent } from './area-administrador/area-administrador.component';
import { EspacioAdminComponent } from './area-administrador/espacio-admin/espacio-admin.component';
import { ManagerHomepageComponent } from './manager-homepage/manager-homepage.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListarComponent,
    CargaDatosComponent,
    AreaAdministradorComponent,
    EspacioAdminComponent,
    ManagerHomepageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
