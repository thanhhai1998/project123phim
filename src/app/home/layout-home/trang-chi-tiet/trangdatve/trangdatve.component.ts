import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trangdatve',
  templateUrl: './trangdatve.component.html',
  styleUrls: ['./trangdatve.component.scss']
})
export class TrangdatveComponent implements OnInit {
  step = 1;
  chonghe() {
    this.step = 2;
  }
  backtoStep1() {
    this.step = 1;
  }
 
  constructor() { }

  ngOnInit() {
  }

}
