import { Component } from '@angular/core';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-contactos-content',
  templateUrl: './contactos-content.component.html',
  styleUrls: ['./contactos-content.component.css']
})

export class ContactosContentComponent {

  public filtro: string = '';
  public contactos:any;

  constructor(private servicio:DbService){}

  ngOnInit():void {
    this.servicio.getData().subscribe(response => {
      this.contactos = response.agenda; //response.contacto
    })
  }
}
