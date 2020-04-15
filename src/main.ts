import {My3D,Vec3} from './My3D'
import {DummyClass} from './foo'


export {My3D};
export {DummyClass};


// type Vec3 = (myArgument: [number,number,number]) => void;
// type Vec3 = My3D.Vec3;

// const Vec3:

let example = new DummyClass();

let res:string = example.greeter('ben');

// let v1:any = [0,0];
// let v1:[number,number,number] = [0,0,0];
let v1:Vec3 = [0,0,0];

// v1.push(3);

let v0:string = example.vtest(v1);


console.log(res);



export function manualExport() {
  let x = [
  'My3D'
  ];
  return x;
}
