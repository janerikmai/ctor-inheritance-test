import { Injectable } from '@angular/core';

@Injectable()
export class TestModel {
  data: boolean;

  constructor(){
    this.data = true;
  }
}
