import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/db.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tabla-novedades',
  templateUrl: './tabla-novedades.component.html',
  styleUrls: ['./tabla-novedades.component.css']
})

export class TablaNovedadesComponent implements OnInit{
  data:any;

  constructor(private servicio:DbService, public _router: Router, public _location: Location){
  }

  ngOnInit(): void{
    this.servicio.getData().subscribe( response => {
      this.data = response; //response.notificaciones
    });
  }

  filtro1 = 'id';
  filtro2 = 'desc';

  filaActiva:any = {"active": false, "index": -1};
  mensaje:string = "hola mundo";
  selectedUser:any;

  refresh(): void {
		this._router.navigateByUrl("contacto", { skipLocationChange: true }).then(() => {
		console.log(decodeURI(this._location.path()));
		this._router.navigate([decodeURI(this._location.path())]);
		});
	}

  RowSelected(fila:any, indice:any):void{
    this.selectedUser = fila;
    this.filaActiva.active = true;
    this.filaActiva.index = indice;
  }
}

export interface Novedad {
  caseId: string,
  cid: string,
  createdAt: Date,
  description: string,
  estado: boolean,
  id: number
  problemDate: Date,
  sitio: string,
  updatedAt: Date
}
