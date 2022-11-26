import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCvComponent } from './components/add-cv/add-cv.component';
import { CvDetailPageComponent } from './components/cv-detail-page/cv-detail-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { SliderComponent } from './components/slider/slider.component';
import { ViewCvsComponent } from './components/view-cvs/view-cvs.component';


const routes: Routes = [
  {path:"viewCvs" , component: ViewCvsComponent},
  {path:"addCv", component: AddCvComponent},
  {path:"textEditor", component: MiniWordComponent},
  {path:"detail/:id",component:CvDetailPageComponent},
  {path:"login", component: LoginFormComponent},
  {path:"slider", component: SliderComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
