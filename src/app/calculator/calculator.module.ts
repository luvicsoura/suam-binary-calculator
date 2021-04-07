import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  declarations: [CalculatorComponent],
  imports: [
    CommonModule,
    ButtonsModule
  ]
})
export class CalculatorModule { }
