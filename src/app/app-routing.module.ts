import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCvComponent } from './components/add-cv/add-cv.component';
import { CvDetailPageComponent } from './components/cv-detail-page/cv-detail-page.component';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { ViewCvsComponent } from './components/view-cvs/view-cvs.component';


const routes: Routes = [
  {path:"viewCvs" , component: ViewCvsComponent},
  {path:"addCv", component: AddCvComponent},
  {path:"textEditor", component: MiniWordComponent},
  {path:"detail/:id",component:CvDetailPageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
