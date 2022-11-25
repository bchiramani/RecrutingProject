import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './components/detail/detail.component';
import { ItemComponent } from './components/item/item.component';
import { ListComponent } from './components/list/list.component';
import { CvComponent } from './components/cv/cv.component';
import { AddCvComponent } from './components/add-cv/add-cv.component';
import { FormCvComponent } from './components/form-cv/form-cv.component';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { CvEmbauchesComponent } from './components/cv-embauches/cv-embauches.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { RainbowDirective } from './components/rainbow.directive';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ViewCvsComponent } from './components/view-cvs/view-cvs.component';
import { RouterSimulatorComponent } from './components/router-simulator/router-simulator.component';
import { CvDetailPageComponent } from './components/cv-detail-page/cv-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ItemComponent,
    ListComponent,
    CvComponent,
    AddCvComponent,
    FormCvComponent,
    MiniWordComponent,
    DefaultImagePipe,
    CvEmbauchesComponent,
    RainbowDirective,
    NavbarComponent,
    ViewCvsComponent,
    RouterSimulatorComponent,
    CvDetailPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
