import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  base = 2;

  constructor() { }

  add(...binaryNumbers: string[]) {

    const sum = binaryNumbers.reduce(this.sumReducer, 0)
    return this.decimalToBinary(sum);
  }

  private sumReducer = (acc, currentNumber) => {
    return acc + Number.parseInt(currentNumber, this.base)
  }

  private decimalToBinary(decimal) {
    return (decimal).toString(this.base)
  }
}
