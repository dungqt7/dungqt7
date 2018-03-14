import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';

const MODULES = [
  FormsModule,
  MatButtonModule,
  MatCheckboxModule,
  BrowserAnimationsModule,
  MatRadioModule,
  MatCardModule,
  MatSlideToggleModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatSliderModule,
  MatSelectModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatTooltipModule
];

@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES
  ]
})
export class MatComModule { }
export class PizzaPartyComponent { }
