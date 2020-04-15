
type Vec3 = [number,number,number];


class Rotate {
  static x(vec:Vec3, theta:number) {
    const ts = Math.sin(theta);
    const tc = Math.cos(theta);

    const x = vec[0];
    const y = vec[1];
    const z = vec[2];

    const out = [
      x,
      y * tc - z * ts,
      z * tc + y * ts];

    return out;
  }

  static y(vec:Vec3, theta:number) {
    const ts = Math.sin(theta);
    const tc = Math.cos(theta);

    const x = vec[0];
    const y = vec[1];
    const z = vec[2];

    const out = [
      x * tc - z * ts,
      y,
      z * tc + x * ts];

    return out;
  }


  static z(vec:Vec3, theta:number) {
    const ts = Math.sin(theta);
    const tc = Math.cos(theta);

    const x = vec[0];
    const y = vec[1];
    const z = vec[2];

    const out = [
      x * tc - y * ts,
      y * tc + x * ts,
      z];

    return out;
  }
};


class My3D {

  public static Rotate: Rotate;

  static add(v0:Vec3, v1:Vec3) {
    const x = v0[0] + v1[0];
    const y = v0[1] + v1[1];
    const z = v0[2] + v1[2];
    return [x,y,z];
  }

  static sub(v0:Vec3, v1:Vec3) {
    const x = v0[0] - v1[0];
    const y = v0[1] - v1[1];
    const z = v0[2] - v1[2];
    return [x,y,z];
  }

  static mul(v0:Vec3, v1:Vec3) {
    const x = v0[0] * v1[0];
    const y = v0[1] * v1[1];
    const z = v0[2] * v1[2];
    return [x,y,z];
  }

  static mag(v0:Vec3) {
    let ret = 0;
    for(let i = 0; i < 3; i++) {
      ret += v0[i]*v0[i];
    }
    return Math.sqrt(ret);
  }

  static normalize(v0:Vec3):Vec3 {
    const mag = My3D.mag(v0);
    const x = v0[0] / mag;
    const y = v0[1] / mag;
    const z = v0[2] / mag;
    return [x,y,z];
  }
};

My3D.Rotate = Rotate;

export {My3D,Vec3};


