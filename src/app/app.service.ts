import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private result: string;

  constructor() {
    this.result = '0';
  }

  getResult(): string {
    return this.result;
  }

  toAbsolute() {
    const result = Number(this.result);
    if (result > 0) {
      this.result = `-${result}`;
    }
    if (result < 0) {
      this.result = `${Math.abs(result)}`;
    }
  }

  toPercent() {
    const result = Number(this.result);
    const percent = result / 100;
    this.result = `${percent}`;
  }

  setNumber(value: string) {
    const result = Number(this.result);
    if (result != 0) {
      this.result = `${this.result}${value}`;
    } else {
      this.result = `${value}`;
    }
  }

  doReset(): void {
    this.result = '';
  }
}
