import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private currentResult: string;
  private symbol: string;
  private prevResult: string;

  constructor() {
    this.currentResult = '0';
    this.symbol = '';
    this.prevResult = '';
  }

  getResult(): string {
    return this.currentResult;
  }

  toAbsolute() {
    const result = Number(this.currentResult);
    if (result > 0) {
      this.currentResult = `-${result}`;
    }
    if (result < 0) {
      this.currentResult = `${Math.abs(result)}`;
    }
  }

  toPercent() {
    const result = Number(this.currentResult);
    const percent = result / 100;
    this.currentResult = `${percent}`;
  }

  setNumber(value: string) {
    const result = Number(this.currentResult);
    if (result != 0) {
      this.currentResult = `${this.currentResult}${value}`;
    } else {
      this.currentResult = `${value}`;
    }
  }

  changeOperator(symbol: string): void {
    if (!this.symbol) {
      this.prevResult = this.currentResult;
    }
    this.currentResult = '';
    this.symbol = symbol;
  }

  toCalculate(): void {
    if (!this.prevResult) {
      return;
    }
    const currentResult = Number(this.currentResult);
    const prevResult = Number(this.prevResult);
    switch (this.symbol) {
      case '+':
        {
          const result = prevResult + currentResult;
          this.currentResult = `${result}`;
        }
        break;
      case '-':
        {
          const result = prevResult - currentResult;
          this.currentResult = `${result}`;
        }
        break;
      case '/':
        {
          const result = prevResult / currentResult;
          this.currentResult = `${result}`;
        }
        break;
      case '*':
        {
          const result = prevResult * currentResult;
          this.currentResult = `${result}`;
        }
        break;
      default:
        break;
    }

    this.prevResult = '';
    this.symbol='';
  }

  doReset(): void {
    this.currentResult = '';
    this.symbol = '';
    this.prevResult = '';
  }
}
