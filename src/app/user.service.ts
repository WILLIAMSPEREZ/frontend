import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  API_ENDPOINT = 'http://192.168.1.105:8000/api';
  // 192.168.1.109:8000/api

  constructor( private http: HttpClient) { }

// getPeticion(){
//   this.http.get('/pagina3').subscribe(data => {
//     console.log(data);
//     });
//   }

  postSend(user: User){
    return this.http.post(this.API_ENDPOINT + '/auth/login' , user);
  }
}

