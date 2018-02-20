import { Component, ChangeDetectorRef } from '@angular/core';
import { TestModel } from '../../model/test.model';
import { A } from '../a/a.component';

@Component({
  selector: 'c-component',
  template: `<ng-content></ng-content>`
})
export class C extends A {
  constructor(
    public cdr: ChangeDetectorRef,
    public m: TestModel
  ){
    super(cdr, m);
  }

}
