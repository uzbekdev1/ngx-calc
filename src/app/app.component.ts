import {
  Component,
  OnInit,
} from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private service: AppService) {}

  ngOnInit(): void {}

  get result(): string {
    return this.service.getResult();
  }

  onReset(): void {
    this.service.doReset();
  }

  onAbsolute(): void {
    this.service.toAbsolute();
  }

  onPercent(): void {
    this.service.toPercent();
  }

  changeValue(value: string) {
    this.service.setNumber(value);
  }
}
