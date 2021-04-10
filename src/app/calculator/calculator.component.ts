import { Component, OnInit } from '@angular/core';
import { HistoryOperation } from '../history/history.operation';
import { HistoryService } from '../history/history.service';
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
  private evaluated: boolean = false;

  constructor(
    private calculatorService: CalculatorService,
    private historyService: HistoryService
  ) {
    this.resetInput();
    this.resetResult();
  }

  ngOnInit(): void {
  }

  insert(input: string) {
    if (this.evaluated) this.resetInputs();
    this.currentInput = this.sanitizeInput(
      this.currentInput.concat(input)
    );

    this.result = this.currentInput;
  }

  confirmNumber = () => {
    if (this.evaluated) {
      this.currentInput = this.result;
      this.resetInputs();
    }
    this.inputs.push(this.currentInput);
    this.resetInput();
    this.resetResult();
  }

  evaluate = () => {
    const result = this.calculatorService.add(...this.inputs);
    this.result = result;
    this.updateHistory(this.inputs, this.result);
    this.evaluated = true;
  }

  updateHistory(operands, result) {

    const operation: HistoryOperation = {
      operands: [...operands],
      result: result
    }
    this.historyService.addOperationToHistory(operation)
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
    this.evaluated = false;
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
