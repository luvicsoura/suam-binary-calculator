import { Component, OnInit } from '@angular/core';
import { CalculatorService } from './calculator.service';

const DEFAULT_CURRENT_INPUT = '0';

@Component({
  selector: 'app-calculator',
  providers: [CalculatorService],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  result: string;

  private inputs: string[] = [];
  private currentInput: string;

  constructor(
    private calculatorService: CalculatorService
  ) {
    this.resetInput();
    this.resetResult();
  }

  ngOnInit(): void {
  }

  insert(input: string) {
    this.currentInput = this.sanitizeInput(
      this.currentInput.concat(input)
    );

    this.result = this.currentInput;
  }

  confirmNumber = () => {

    this.inputs.push(this.currentInput);
    this.resetInput();
    this.resetResult();
  }

  evaluate = () => {
    const result = this.calculatorService.add(...this.inputs);
    console.log({result})
    this.result = result;
  }

  clear = () => {
    this.resetInput();
    this.resetResult();
    this.resetInputs();
  }

  private resetInput() {
    this.currentInput = DEFAULT_CURRENT_INPUT.slice();
  }

  private resetResult() {
    this.result = DEFAULT_CURRENT_INPUT.slice();
  }

  private resetInputs() {
    this.inputs = [];
  }

  private sanitizeInput(input) {

    let sanitizedInput = this.removeInputLeadingZero(input);
    return sanitizedInput;
  }

  private removeInputLeadingZero(input) {

    if (this.currentInput[0] === '0') {
      return  input.slice(1, this.currentInput.length + 1);
    }

    return input;
  }

}
