module.exports = {
  build2dArray: (a, b, def = undefined) => {
    const array = new Array(a);
    for (let i = 0; i < a; i++) {
      array[i] = new Array(b).fill(def);
    }
    return array;
  },
};
