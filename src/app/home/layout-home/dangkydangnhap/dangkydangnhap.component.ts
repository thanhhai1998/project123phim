import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dangkydangnhap',
  templateUrl: './dangkydangnhap.component.html',
  styleUrls: ['./dangkydangnhap.component.scss']
})
export class DangkydangnhapComponent implements OnInit, OnChanges {
  @Input() isShowFormLogin;
  @Output() evtCloseFormLogin = new EventEmitter;
  @Output() evtLoginSuccess = new EventEmitter;
  constructor() { }
  ngOnChanges() {
    console.log(this.isShowFormLogin);
  }
  dangnhap: boolean = true;
  chuyenDangNhapvsDangKy() {
    this.dangnhap = !this.dangnhap;
  }
  loginSuccess(tenTaiKhoan){
    this.evtLoginSuccess.emit(tenTaiKhoan);
  }
  

  closeFormLogin() {
    this.evtCloseFormLogin.emit(this.isShowFormLogin);
  }
  ngOnInit() {

  }

}
