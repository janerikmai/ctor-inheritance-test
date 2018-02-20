import { Component, ChangeDetectorRef } from '@angular/core';
import { TestModel } from '../../model/test.model';

@Component({
  selector: 'a-component',
  template: `<ng-content></ng-content>`
})
export class A {
  constructor(
    public cdr: ChangeDetectorRef,
    public m: TestModel,
  ){
    this.m.data = false;
  }
}
