import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserModule } from '../user/user.module';
import { LiquidezComponent } from './pages/liquidez/liquidez.component';
import { SolvenciaComponent } from './pages/solvencia/solvencia.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { RentabilidadComponent } from './pages/rentabilidad/rentabilidad.component';
import { InputFormComponent } from './pages/input-form/input-form.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    HomePageComponent,
    LiquidezComponent,
    SolvenciaComponent,
    GestionComponent,
    RentabilidadComponent,
    InputFormComponent
   
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    UserModule,
    FormsModule,
    ReactiveFormsModule
    
 
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
