import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DbService {
  private url = 'http://10.19.16.129:3005/api/v1/novedades/';

  constructor(private http:HttpClient) {
  }

  getData(): Observable<any> {
    return this.http.get(this.url);
  }
}
