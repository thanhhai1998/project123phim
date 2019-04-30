import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {
  @Input() itemGhe;
  constructor() { }
  datghe(){
    this.itemGhe.TrangThai = !this.itemGhe.TrangThai;
  }
  ngOnInit() {
  }

}
