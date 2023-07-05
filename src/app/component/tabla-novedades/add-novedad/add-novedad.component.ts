import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-novedad',
  templateUrl: './add-novedad.component.html',
  styleUrls: ['./add-novedad.component.css']
})

export class AddNovedadComponent {

  @ViewChild(FormGroupDirective)
  formDirective!: FormGroupDirective;

  success = false;
  fail = false;

  urlAPI:string = "http://10.19.16.129:3005/api/v1/novedades/"

  constructor(private http: HttpClient) {
  }

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
    "caseId": new FormControl('', [
      Validators.required
    ]),
    "estado": new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(5)
    ]),
    "problemDate": new FormControl('', [
      Validators.required,
      Validators.min(6)
    ]),
    "cid": new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(4)
    ]),
    "sitio": new FormControl('', [
      Validators.required,
      Validators.max(50)
    ]),
    "description": new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(200)
    ]),
  });


  public onSubmit() {
    this.fail = false;
    this.success = false;
    // Logic to update the novedad will go here, but for now, we'll just log the values
    this.http.post(this.urlAPI, this.formNovedad.value, { observe: 'response'})
    .subscribe((response: HttpResponse<any>) => {
      //↓↓ Realizar acciones necesarias con el status code y la respuesta
      console.log("RESULTADO:", response.ok, response.status)
      if (response.ok){
        this.success = true;
      }
    }, (error) => {
      console.error("Error en la peticion:", error)
      //Mostrar mensaje de error en el frontend
      this.fail = true
    });
  }

  public onClose(){
    this.success = false;
    this.fail = false;
    this.formDirective.resetForm();
  }

}


