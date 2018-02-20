import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TestModel } from './model/test.model';
import { A } from './component/a/a.component';
import { B } from './component/b/b.component';
import { C } from './component/c/c.component';


@NgModule({
  declarations: [
    AppComponent,
    A,
    B,
    C,
  ],
  exports: [
    A,
    B,
    C,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TestModel,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('Application constructor()');
  }
}
