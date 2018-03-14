import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatComModule } from './mat-com/mat-com.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Demo1Component,
  ],
  imports: [
    BrowserModule,
    MatComModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

