import { Component, OnInit } from '@angular/core';
import { Demo } from './demo';
import { a } from '../mock-demo';
import { MatSnackBar } from '@angular/material';
import { PizzaPartyComponent } from '../mat-com/mat-com.module';
import { Subject } from 'rxjs/Subject';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  snackBar: any;
  dialog: any;
  demo: Demo = {
    id: 1,
    name: 'Windstorm'
  };
  // value = a;
  special = true;
  isvalue;
  gianhap;
  soluong;
  sale;
  isSpecial;
  showTicks = false;
  startDate = new Date(1990, 0, 1);
  color = 'accent';
  checked = false;
  panelOpenState = false;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(v) {
    this._tickInterval = Number(v);
  }

  private _tickInterval = 1;
  invert = false;
  disabled = false;
  max = 100;
  min = 0;
  step = 1;
  autoTicks = false;
  thumbLabel = false;
  vertical = false;
  animal: string;
  name: string;

  gia$ = new Subject<number>();
  soLuong$ = new Subject<number>();
  sale$ = new Subject<number>();

  constructor(snackBar: MatSnackBar) { }

  ngOnInit() {
    combineLatest(
      this.gia$.asObservable().pipe(
        filter(x => x > 0)
      ),
      this.soLuong$.asObservable().pipe(
        filter(x => x > 0)
      ),
      this.sale$.asObservable().pipe(
        filter(x => x > 0)
      )
    ).subscribe(([gianhap, soluong, sale]) => {
      this.isvalue = ((gianhap * (100 - sale)) / 100) * soluong;
    });
  }

  onKey(event: KeyboardEvent) { // with type info
    this.gianhap = (<HTMLInputElement>event.target).value;
    this.calc();
  }
  private calc() {
    if (this.gianhap && this.soluong && this.sale) {
      this.isvalue = ((this.gianhap * (100 - this.sale)) / 100) * this.soluong;
    }
  }

  onKey1(event: KeyboardEvent) { // with type info
    this.soluong = (<HTMLInputElement>event.target).value;
    this.calc();
  }
  onKey2(event: KeyboardEvent) { // with type info
    this.sale = (<HTMLInputElement>event.target).value;
    this.calc();
  }


}

