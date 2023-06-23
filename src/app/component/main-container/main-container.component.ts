import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})



export class MainContainerComponent implements OnInit{
  data:any;
  selectedUser:any;
  constructor(private servicio:DbService){
    this.servicio.getData().subscribe( response => {
      console.log(response)
      this.data = response; //response.notificaciones
    });

   }


  ngOnInit(): void{
  }
  RowSelected(fila:any):void{
    this.selectedUser = fila;
    console.log(fila);
  }

}
