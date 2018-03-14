import { Component, OnInit } from '@angular/core';
import {Demo1} from './demo1';
@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {
  demo1: Demo1 = {
    email: 'admin@gmail.com',
    adress: '16 km',
  };
  constructor() { }

  ngOnInit() {
  }

}
