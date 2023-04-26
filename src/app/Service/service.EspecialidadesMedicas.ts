import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { EspecialidadesMedicas } from '../Modelo/EspecialidadesMedicas';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  //especialidad: EspecialidadesMedicas;
  constructor(private http: HttpClient) { 

  }
  Url = 'http://localhost:8084/forProject2IPC2_2023_war_exploded/ServletEspecialidadesMedicas';
  getEspecialidades(){
    return this.http.get<EspecialidadesMedicas[]>(this.Url);
    
  }
}
