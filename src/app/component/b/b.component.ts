import { Component } from '@angular/core';
import { A } from '../a/a.component';

@Component({
  selector: 'b-component',
  template: `<ng-content></ng-content>`
})
export class B extends A {

}
