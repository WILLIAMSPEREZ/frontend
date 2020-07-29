import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, FormControlName, FormGroup, ReactiveFormsModule } from '@angular/forms';


// importaciones de paquetes de estilos
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// importaciones de los componentes creados
import { LoginComponent } from './login/login.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { CapturaComponent } from './captura/captura.component';
import { Captura1Component } from './captura1/captura1.component';
import { Captura3Component } from './captura3/captura3.component';
import { Captura4Component } from './captura4/captura4.component';
import { Captura5Component } from './captura5/captura5.component';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Captura2Component } from './captura2/captura2.component';
import { HttpModule } from '@angular/http';

// import {InputMaskModule} from 'primeng/inputmask';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainNavComponent,
    CapturaComponent,
    Captura1Component,
    Captura3Component,
    Captura4Component,
    Captura5Component,
    Captura2Component,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatTabsModule,
    MatSlideToggleModule,
    HttpClientModule,
    DragDropModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
