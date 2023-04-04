import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabla-modal',
  templateUrl: './tabla-modal.component.html',
  styleUrls: ['./tabla-modal.component.css']
})
export class TablaModalComponent {

  infoAMostrar: any = {"id": "vacio", "active": "vacio", "cidSitio": "vacio", "sitio": "vacio", "descripcion": "vacio", "fecha": "vacio" };
  @Input() selectedRow: any;
  constructor () {}

  MostrarSelected ():void {
    this.infoAMostrar = this.selectedRow;
    console.log(this.selectedRow)  
  }

  LimpiarSelected ():void {
    this.infoAMostrar = {"id": "vacio", "active": "vacio", "cidSitio": "vacio", "sitio": "vacio", "descripcion": "vacio", "fecha": "vacio" };
  }
}
