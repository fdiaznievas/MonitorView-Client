import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabla-modal',
  templateUrl: './tabla-modal.component.html',
  styleUrls: ['./tabla-modal.component.css']
})
export class TablaModalComponent {

  infoAMostrar: any = {"id": "vacio", "fechaCreacion": "1/1/1990", "active": "vacio", "cidSitio": "vacio", "sitio": "vacio", "descripcion": "vacio", "fecha": "vacio" };
  @Input() selectedRow: any;
  constructor () {}

  MostrarSelected ():void {
    this.infoAMostrar = this.selectedRow;
    if (this.infoAMostrar.id == "vacio") {
    }
    else {
    }
  }

  LimpiarSelected ():void {
    this.infoAMostrar = {"id": "vacio", "fechaCreacion": "1/1/1990", "active": "vacio", "cidSitio": "vacio", "sitio": "vacio", "descripcion": "vacio", "fecha": "vacio" };
  }

  MostrarFechaConsola ():void {
    let prueba :any = document.getElementById("validationCustom05")
    console.log(prueba.value)
  }
}
