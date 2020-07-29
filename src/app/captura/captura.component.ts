import { Component, OnInit, NgModule, Output, HostListener } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';

// Importacion del metodo Draggable
import { MatDialogRef, MatDialogContainer } from '@angular/material/dialog';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { takeUntil } from 'rxjs/operators/takeUntil';
import 'rxjs/add/observable/fromEvent';
import { take } from 'rxjs/operators/take';


@Component({
  selector: 'app-captura',
  templateUrl: './captura.component.html',
  styleUrls: ['./captura.component.css'],
})

export class CapturaComponent implements OnInit {
  // variables para el metodo drag
  private _subscription: Subscription;
  mouseStart: Position;
  mouseDelta: Position;
  offset: Position;

  x = 'hola';
  message = 'info';
  subject = webSocket('ws://192.168.1.106:8888');

  constructor(
    private matDialogRef: MatDialogRef<any>,
    private container: MatDialogContainer) {
    this.comienza();
  }
   // tslint:disable-next-line: typedef
   comienza(){
    setTimeout(() => {
      // this.mimetodo();
      this.sendToServer();
      this.comienza();
    }, 5000);
  }
  // tslint:disable-next-line: typedef
  mimetodo(){
    console.log(this.x);
    console.log('');
  }
  // tslint:disable-next-line: typedef
  sendToServer(){
    this.subject.subscribe();
    this.subject.next(this.message);
    this.listenClient();
  }
  // tslint:disable-next-line: typedef
  listenClient(){
    this.subject.subscribe(
      msg => {
        var respuesta = JSON.stringify(msg);
        this.change(respuesta);
        return console.log('mensaje recibido: ' + JSON.stringify(msg));
      },
      // msg => JSON.stringify(msg),
      err => console.log(err),
      () => console.log('complete')
    );
  }
  // tslint:disable-next-line: typedef
  change(pm1){
    var obj1 = JSON.parse(pm1);
    for(var i = 0;i<obj1.length;i++){
      if(obj1[i]['info'] == 'null'){
        console.log(obj1[i]['info']);
        let bt1 = document.getElementById('btn_ns1');
        bt1.style.color = 'green';

        let bt2 = document.getElementById('btn_ns2');
        bt2.style.color = 'green';

        let bt3 = document.getElementById('btn_ca');
        bt3.style.color = 'green';

        let bt4 = document.getElementById('btn_auth');
        bt4.style.color = 'green';

        let bt5 = document.getElementById('btn_sgbd');
        bt5.style.color = 'green';

        let bt6 = document.getElementById('btn_ldap');
        bt6.style.color = 'green';

        let bt7 = document.getElementById('btn_xsd');
        bt7.style.color = 'green';
      }
      if(obj1[i]['server'] == 'ns1'){
        console.log(obj1[i]['server']);
        let bt1 = document.getElementById('btn_ns1');
        bt1.style.color = 'red';
      }
      if(obj1[i]['server'] == 'ns2'){
        console.log(obj1[i]['server']);
        let bt2 = document.getElementById('btn_ns2');
        bt2.style.color = 'red';
      }
      if(obj1[i]['server'] == 'ca'){
        console.log(obj1[i]['server']);
        let bt3 = document.getElementById('btn_ca');
        bt3.style.color = 'red';
      }
      if(obj1[i]['server'] == 'auth'){
        console.log(obj1[i]['server']);
        let bt4 = document.getElementById('btn_auth');
        bt4.style.color = 'red';
      }
      if(obj1[i]['server'] == 'sgbd'){
        console.log(obj1[i]['server']);
        let bt5 = document.getElementById('btn_sgbd');
        bt5.style.color = 'red';
      }
      if(obj1[i]['server'] == 'ldap'){
        console.log(obj1[i]['server']);
        let bt6 = document.getElementById('btn_ldap');
        bt6.style.color = 'red';
      }
      if(obj1[i]['server'] == 'schema'){
        console.log(obj1[i]['server']);
        let bt7 = document.getElementById('btn_xsd');
        bt7.style.color = 'red';
      }
    }
  }

  // Implementacion del metodo draggable
  ngOnInit() {
    this.offset = this._getOffset();
  }
  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.mouseStart = {x: event.pageX, y: event.pageY};

    const mouseup$ = Observable.fromEvent(document, 'mouseup');
    this._subscription = mouseup$.subscribe(() => this.onMouseup());

    const mousemove$ = Observable.fromEvent(document, 'mousemove')
      .pipe(takeUntil(mouseup$))
      .subscribe((e: MouseEvent) => this.onMouseMove(e));

    this._subscription.add(mousemove$);
  }

  onMouseMove(event: MouseEvent) {
      this.mouseDelta = {x: (event.pageX - this.mouseStart.x), y: (event.pageY - this.mouseStart.y)};

      this._updatePosition(this.offset.y + this.mouseDelta.y, this.offset.x + this.mouseDelta.x);
  }

  onMouseup() {
    if (this._subscription) {
      this._subscription.unsubscribe();
      this._subscription = undefined;
    }

    if (this.mouseDelta) {
      this.offset.x += this.mouseDelta.x;
      this.offset.y += this.mouseDelta.y;
    }
  }
  private _updatePosition(top: number, left: number) {
    this.matDialogRef.updatePosition({
      top: top + 'px',
      left: left + 'px'
    });
  }
  private _getOffset(): Position {
    const box = this.container['_elementRef'].nativeElement.getBoundingClientRect();
    return {
      x: box.left + pageXOffset,
      y: box.top + pageYOffset
    };
  }
} // cierre de corchete de la clase capturaComponent
export interface Position {
  x: number;
  y: number;
}
