import { Component } from '@angular/core';

@Component({
    selector: 'foo',
    templateUrl:'foo.component.html' 
})
class FooComponent {
  bar: string;

  constructor() {
      //set default bar value
      this.bar = 'my string';
  }

  onKeyPress(event): void {
      //update bar value
      this.bar = event.target.value;
  }
}