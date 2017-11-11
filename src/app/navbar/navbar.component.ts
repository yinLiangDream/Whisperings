import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#registerModal').modal();
    $('#logInModel').modal();
  }

}
