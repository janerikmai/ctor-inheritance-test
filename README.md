# ctor inheritance test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Install
`npm i`

## Pack
`npm run pack`

## B extends A without constructor and super call
look into dist/bundles/ctor-inheritance.umd.js

[Class A](src/app/component/a/a.component.ts)
``` javascript 
/** @nocollapse */
A.ctorParameters = function () { return [
    { type: core.ChangeDetectorRef, },
    { type: TestModel, },
]; };
```

[Class B](src/app/component/b/b.component.ts#L9)
``` javascript
/** @nocollapse */
B.ctorParameters = function () { return []; };
```

results in class B *not* having providers `TestModel` and `ChangeDetectorRef`

## C extends A with constructor and super call

[Class C](src/app/component/c/c.component.ts#L10-L15)
``` javascript
C.ctorParameters = function () { return [
    { type: core.ChangeDetectorRef, },
    { type: TestModel, },
]; };
```

## Expected behavior
Class B should have injector dependencies inherited from A without own constructor and super call
