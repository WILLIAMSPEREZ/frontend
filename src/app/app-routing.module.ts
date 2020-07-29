import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { CapturaComponent } from './captura/captura.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'main-nav', component: MainNavComponent },
  { path: 'captura', component: CapturaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
