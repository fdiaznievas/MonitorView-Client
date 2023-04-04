import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})



export class MainContainerComponent implements OnInit{
  constructor(private servicio:DbService){ }

  data:any;
  selectedUser:any;

  ngOnInit(): void{
    this.servicio.getData().subscribe( response => {
      this.data = response.notificaciones;
    });
    console.log(this.data)
  }
  RowSelected(fila:any):void{
    this.selectedUser = fila;
    console.log(fila);
  }

}
