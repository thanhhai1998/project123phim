import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHomeComponent } from './layout-home/layout-home.component';
import { HeaderComponent } from './layout-home/header/header.component';
import { FooterComponent } from './layout-home/footer/footer.component';
import { TrangChuComponent } from './layout-home/trang-chu/trang-chu.component';
import { TrangChiTietComponent } from './layout-home/trang-chi-tiet/trang-chi-tiet.component';
import { HomeRoutingModule } from './home-routing.module';
import { PhimComponent } from './layout-home/trang-chu/phim/phim.component';
import { SliderComponent } from './layout-home/trang-chu/slider/slider.component';
import { DangchieuComponent } from './layout-home/trang-chu/phim/dangchieu/dangchieu.component';
import { SapchieuComponent } from './layout-home/trang-chu/phim/sapchieu/sapchieu.component';
import { CumrapComponent } from './layout-home/trang-chu/cumrap/cumrap.component';
import { TintucComponent } from './layout-home/trang-chu/tintuc/tintuc.component';
import { QuangcaoComponent } from './layout-home/trang-chu/quangcao/quangcao.component';
import { ItemPhimComponent } from './layout-home/trang-chu/phim/item-phim/item-phim.component';
import { LichchieuComponent } from './layout-home/trang-chi-tiet/lichchieu/lichchieu.component';
import { ThongtinphimComponent } from './layout-home/trang-chi-tiet/thongtinphim/thongtinphim.component';
import { TrangdatveComponent } from './layout-home/trang-chi-tiet/trangdatve/trangdatve.component';
import { TrangchitietRoutingModule } from './layout-home/trang-chi-tiet/trangchitiet-routing.module';
import { DanhsachgheComponent } from './layout-home/trang-chi-tiet/trangdatve/danhsachghe/danhsachghe.component';
import { GheComponent } from './layout-home/trang-chi-tiet/trangdatve/ghe/ghe.component';
import { MaterialModuleModule } from '../share/material/material.module';
@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [
    LayoutHomeComponent,
    HeaderComponent,
    FooterComponent,
    TrangChuComponent,
    TrangChiTietComponent,
    PhimComponent,
    SliderComponent,
    DangchieuComponent,
    SapchieuComponent,
    CumrapComponent,
    TintucComponent,
    QuangcaoComponent,
    ItemPhimComponent,
    LichchieuComponent,
    ThongtinphimComponent,
    TrangdatveComponent,
    DanhsachgheComponent,
    GheComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TrangchitietRoutingModule, MaterialModuleModule
  ],
  exports: [
    LayoutHomeComponent,
    HeaderComponent,
    FooterComponent,
    TrangChuComponent,
    TrangChiTietComponent,
    PhimComponent,
    SliderComponent,
    DangchieuComponent,
    SapchieuComponent,
    CumrapComponent,
    TintucComponent,
    QuangcaoComponent,
    ItemPhimComponent,
    LichchieuComponent,
    ThongtinphimComponent,
    TrangdatveComponent,
    DanhsachgheComponent,
    GheComponent,
  ]
})
export class HomeModule { }
