import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-tabla-novedades',
  templateUrl: './tabla-novedades.component.html',
  styleUrls: ['./tabla-novedades.component.css']
})
export class TablaNovedadesComponent implements OnInit{

  constructor(private servicio:DbService){

    this.servicio.getData().subscribe( response => {
      this.data = response; //response.notificaciones
    });
  }

  filaActiva:any = {"active": false, "index": -1};
  data:any;
  mensaje:string = "hola mundo";
  selectedUser:any;

  ngOnInit(): void{
  }
  RowSelected(fila:any, indice:any):void{
    this.selectedUser = fila;
    this.filaActiva.active = true;
    this.filaActiva.index = indice;
    console.log(fila);
    console.log(this.filaActiva);
  }
}
