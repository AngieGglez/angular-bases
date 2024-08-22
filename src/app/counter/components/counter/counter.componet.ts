import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `<h1>Hola counter</h1>
    <h3> {{ counter }} </h3>
    <p>
      Bienvenido a Angular
    </p>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter(0)">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})
export class CounterComponet{
  public counter: number = 10;

  increaseBy( value: number ):void {
    this.counter += value;
  }

  resetCounter( value: number ):void {
    this.counter = value;
  }
}
