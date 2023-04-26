import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Especialidadades/listar/listar.component';
import { AreaAdministradorComponent } from './area-administrador/area-administrador.component'
import { LoginComponent } from './login/login.component'
import { CargaDatosComponent } from './carga-datos/carga-datos.component'
import { ManagerHomepageComponent } from './manager-homepage/manager-homepage.component';

const routes: Routes = [

  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: ManagerHomepageComponent },
  {
    path: 'areaAdministrador', component: AreaAdministradorComponent,
    children: [
      { path: 'listar', component: ListarComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'cargaDatos', component: CargaDatosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
