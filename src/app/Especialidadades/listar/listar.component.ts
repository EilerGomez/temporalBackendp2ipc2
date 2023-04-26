import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ServiceService} from '../../Service/service.EspecialidadesMedicas'
import { EspecialidadesMedicas } from 'src/app/Modelo/EspecialidadesMedicas';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

  especialidades:EspecialidadesMedicas[] | undefined;
  constructor(private service:ServiceService, private router:Router){}

  ngOnInit(): void {
    this.service.getEspecialidades()
    .subscribe(data=>{
      this.especialidades=data;
    })
  }

}
