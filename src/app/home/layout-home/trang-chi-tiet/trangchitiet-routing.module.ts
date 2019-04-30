import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from '@angular/router';
import { TrangChiTietComponent } from './trang-chi-tiet.component';
import { TrangdatveComponent } from './trangdatve/trangdatve.component';



const Trangchitietroutes: Routes = [
  {
    path: '', component: TrangChiTietComponent, children: [
      { path: 'trangdatve', component: TrangdatveComponent }
    ]
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(Trangchitietroutes)
  ],
  exports: [RouterModule]
})
export class TrangchitietRoutingModule { }
