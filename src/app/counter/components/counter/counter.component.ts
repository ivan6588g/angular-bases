import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
<h3>Counter: {{counter}}</h3>

<button (click)="increseBy(1)">
  +1
</button>

<button (click)="resetCounter()">
  reset
</button>
<button (click)="increseBy(-1)">
  -1
</button>


  `
})

export class CounterComponent  {
  constructor() { }
  public counter:number = 10;

  increseBy( value:number ):void {

    this.counter += value;
  }

  resetCounter() : void {
    this.counter = 10
  }
}
