import jsc from 'jsverify';
import chai from 'chai';
const assert = chai.assert;
import chaiStats from 'chai-stats';
chai.use(chaiStats);

import {My3D} from '../public/bundle.es5.mjs'


let vs = [];

vs.push([1,2,0]);
vs.push([3,-2,-1]);
vs.push([3,-2,0]);
vs.push([3,-3,0]);
vs.push([3,0,-1]);
// vs.push([0,0,-1]);
vs.push([0,1,-1]);
vs.push([7,0,-1]);
vs.push([-1,-1,-1]);
vs.push([-1,-1,1]);
vs.push([-1,1,-1]);
vs.push([-1,1,1]);
vs.push([1,-1,-1]);
vs.push([1,-1,1]);
vs.push([1,1,-1]);
vs.push([1,1,1]);

describe("My3D Basics", () => {


  jsc.property("My3D.Normalize", jsc.constant(0), () => {

    for( let x of vs ) {

      let v0 = x;

      let v0n = My3D.normalize(v0);

      // console.log(v0);
      // console.log(My3D.mag(v0));
      // console.log(My3D.mag(v0n));
      // console.log('');

      assert(My3D.mag(v0) != 1);
      assert.almostEqual(My3D.mag(v0n), 1);
    }


    return true;

  });

});




