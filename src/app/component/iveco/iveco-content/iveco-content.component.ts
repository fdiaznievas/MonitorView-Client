import { Component } from '@angular/core';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-iveco-content',
  templateUrl: './iveco-content.component.html',
  styleUrls: ['./iveco-content.component.css']
})
export class IvecoContentComponent {

  public filtro: string = '';
  public contactos:any;

  constructor(private servicio:DbService){}

  ngOnInit():void {
    this.servicio.getData().subscribe(response => {
      this.contactos = response.agenda; //response.contacto
    })
  }
}
