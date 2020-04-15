import { My3D } from '../src/My3D'
import { property,constant } from 'jsverify';
import { isExportDeclaration } from 'typescript';

let vs = [];

// vs.push(My3D.normalize([1,2,0]));

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

it("My3D Basics", () => {
    expect(My3D).toHaveProperty("normalize");
});

it("My3D.Normalize", () => {
    for( let x of vs ) {

        let v0 = x;

        let v0n = My3D.normalize(v0);

        expect(My3D.mag(v0)).not.toBe(1);
        expect(My3D.mag(v0n)).toBeGreaterThan(0.9);
    }
});

property("My3D.Normalize", constant(0), () => {
    for( let x of vs ) {

        let v0 = x;

        let v0n = My3D.normalize(v0);

        // console.log(v0);
        // console.log(My3D.mag(v0));
        // console.log(My3D.mag(v0n));
        // console.log('');

        expect(My3D.mag(v0)).not.toBe(1);
        expect(My3D.mag(v0n)).toBeGreaterThan(0.9);
    }

    return true;
});

