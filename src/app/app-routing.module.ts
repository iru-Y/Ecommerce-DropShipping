import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmComponent } from './views/adm/adm.component';

const routes: Routes = [
  {
    path: '',
    component: AdmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
