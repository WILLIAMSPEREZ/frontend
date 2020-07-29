import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RequestOptions, Request, RequestMethod, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user: User = { name: '', email: '', password: ''};
  data1: any = {};
  tok1: any = {};
  resp1: any = {};

  // Intectamos el servicio
constructor(
  private userService: UserService,
  private router: Router,
  private http: Http){}

  ngOnInit(){
  }

  send(){
    this.userService.postSend(this.user).subscribe((msg1: User) => {
      this.data1 = msg1;
      this.resp1 = null;

      this.resp1 = this.data1;
      console.log(this.resp1.message);
      if (this.resp1.message == null){
        this.tok1 = this.data1.data;
        console.log(this.tok1.api_token);
        this.router.navigateByUrl('/main-nav');
      }
    });
  }
  fileChange(event): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file = fileList[0];

      const formData = new FormData();
      formData.append('file', file, file.name);

      // const headers = new Headers();
      // It is very important to leave the Content-Type empty
      // do not use headers.append('Content-Type', 'multipart/form-data');
      // headers.append('Authorization', 'Bearer ' + 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9....');
      // const options = new RequestOptions({headers: headers});

      this.http.post('/var/www/html/archivos', formData)
        .map(res => res.json())
        .catch(error => Observable.throw(error))
        .subscribe(
          data => console.log('success'),
          error => console.log(error)
        );
     }
  }
}


