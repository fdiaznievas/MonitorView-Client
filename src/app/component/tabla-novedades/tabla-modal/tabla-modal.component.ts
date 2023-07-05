import { Component, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-tabla-modal',
  templateUrl: './tabla-modal.component.html',
  styleUrls: ['./tabla-modal.component.css']
})
export class TablaModalComponent {
  urlAPI:string = "http://10.19.16.129:3005/api/v1/novedades/";
  @Input() selectedRow: any;
  @ViewChild(FormGroupDirective)
  formDirective!: FormGroupDirective;

  disabledButtons:boolean = true;
  infoAMostrar:any = {caseId: "", problemDate: "", estado: "", cid: "", sitio: "", description: ""};
  success:boolean = false;
  fail:boolean = false;

  constructor (private http: HttpClient, public _router: Router, public _location: Location) {}

  get caseId(){
    return this.formNovedad.get('caseId') as FormControl
  }
  get active(){
    return this.formNovedad.get('estado') as FormControl
  }
  get problemDate(){
    return this.formNovedad.get('problemDate') as FormControl
  }
  get cid(){
    return this.formNovedad.get('cid') as FormControl
  }
  get sitio(){
    return this.formNovedad.get('sitio') as FormControl
  }
  get description(){
    return this.formNovedad.get('description') as FormControl
  }

  formNovedad:FormGroup = new FormGroup({
    "estado": new FormControl({value:'', disabled:false}, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(5)
    ]),
    "problemDate": new FormControl({value:'', disabled: true}, [
      Validators.required,
      Validators.min(6)
    ]),
    "cid": new FormControl({value:'', disabled: true}, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(4)
    ]),
    "sitio": new FormControl({value:'', disabled: true}, [
      Validators.required,
      Validators.max(50)
    ]),
    "description": new FormControl({value:'', disabled: false}, [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(200)
    ]),
  });


  refresh(): void {
		this._router.navigateByUrl("contacto", { skipLocationChange: true }).then(() => {
		this._router.navigate([decodeURI(this._location.path())]);
		});
	}

  MostrarSelected ():void {
    this.infoAMostrar = this.selectedRow;
    this.disabledButtons = false;
    this.formNovedad.setValue({
      estado: this.infoAMostrar.estado,
      problemDate: this.infoAMostrar.problemDate,
      cid: this.infoAMostrar.cid,
      sitio: this.infoAMostrar.sitio,
      description: this.infoAMostrar.description
    });
  }

  public onDelete() {
    // Logic to update the novedad will go here, but for now, we'll just log the values
    this.http.delete( this.urlAPI + this.infoAMostrar.id, {observe: 'response'})
    .subscribe((response: HttpResponse<any>) => {
      //↓↓ Realizar acciones necesarias con el status code y la respuesta
      console.log(this.urlAPI + this.infoAMostrar.id)
      console.log("RESULTADO:", response.ok, response.status)
      if (response.ok){
        this.success = true;
        this.refresh();
      }
    }, (error) => {
      console.error("Error en la peticion:", error)
      //Mostrar mensaje de error en el frontend
      this.fail = true
    });
  }
  onUpdate(){
    this.fail = false;
    this.success = false;
    // Logic to update the novedad will go here, but for now, we'll just log the values
    this.http.patch(this.urlAPI+this.infoAMostrar.id, this.formNovedad.value, { observe: 'response'})
    .subscribe((response: HttpResponse<any>) => {
      //↓↓ Realizar acciones necesarias con el status code y la respuesta
      if (response.ok){
        this.success = true;
        this.refresh();
      }
    }, (error) => {
      console.error("Error en la peticion:", error)
      //Mostrar mensaje de error en el frontend
      this.fail = true
    });
  }

  onClose():void {
    this.infoAMostrar = {caseId: "", problemDate: "", estado: "", cid: "", sitio: "", description: ""};
    this.disabledButtons = true;
    this.formDirective.resetForm();
    this.refresh();
  }
}
