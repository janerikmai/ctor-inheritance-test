# ctor inheritance test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Install
`npm i`

## Pack
`npm run pack`

## B extends A without constructor and super call
look into dist/bundles/ctor-inheritance.umd.js

Class A
``` javascript 
/** @nocollapse */
A.ctorParameters = function () { return [
    { type: core.ChangeDetectorRef, },
    { type: TestModel, },
]; };
```

Class B
``` javascript
/** @nocollapse */
B.ctorParameters = function () { return []; };
```

results in class B *not* having providers `TestModel` and `ChangeDetectorRef`

## C extends A with constructor and super call

Class C
``` javascript
C.ctorParameters = function () { return [
    { type: core.ChangeDetectorRef, },
    { type: TestModel, },
]; };
```

## Expected behavior
Class B should have injector dependencies inherited from A without own constructor and super call
