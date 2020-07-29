import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CapturaComponent } from '../captura/captura.component';
import { Captura1Component } from '../captura1/captura1.component';
import { Captura3Component } from '../captura3/captura3.component';
import { Captura4Component } from '../captura4/captura4.component';
import { Captura5Component } from '../captura5/captura5.component';
import { Captura2Component } from '../captura2/captura2.component';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(CapturaComponent);
  }
  openDialog1(){
    this.dialog.open(Captura1Component);
  }
  openDialog2(){
    this.dialog.open(Captura2Component);
  }
  openDialog3(){
    this.dialog.open(Captura3Component);
  }
  openDialog4(){
    this.dialog.open(Captura4Component);
  }
  openDialog5(){
    this.dialog.open(Captura5Component);
  }
}
