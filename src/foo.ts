// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
  // import "core-js/fn/array.find"
  // ...
class DummyClass {
  constructor() {

  }
  greeter(person: string) {
    return "Hello, " + person;
  }

  adder(a: number, b: number) {
    return a+b;
  }


  vtest(a: [number, number, number]) {
    return ''+a[0];
  }

}

export {DummyClass};
