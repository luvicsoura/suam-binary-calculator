import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should add 0b10 to 0b11 and return 0b101', function () {
    expect(service.add('10', '11')).toBe('101')
  })

  it('Should add 0b10 and 0b11 and 0b11 and 0b11 and return 0b1011', function () {
    expect(service.add('10', '11', '11', '11')).toBe('1011')
  })
});
