import { Component, OnInit, HostListener } from '@angular/core';
// Importacion del metodo Draggable
import { MatDialogRef, MatDialogContainer } from '@angular/material/dialog';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { takeUntil } from 'rxjs/operators/takeUntil';
import 'rxjs/add/observable/fromEvent';
import { take } from 'rxjs/operators/take';

@Component({
  selector: 'app-captura1',
  templateUrl: './captura1.component.html',
  styleUrls: ['./captura1.component.css']
})
export class Captura1Component implements OnInit {
  [x: string]: any;

    // variables para el metodo drag
    private _subscription: Subscription;
    mouseStart: Position;
    mouseDelta: Position;
    offset: Position;

  constructor(
    private matDialogRef: MatDialogRef<any>,
    private container: MatDialogContainer
  ) { }

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
} // cierre de la clase
export interface Position {
  x: number;
  y: number;
}
