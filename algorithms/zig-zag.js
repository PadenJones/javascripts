/**
 *  The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows
 *  like this: (you may want to display this pattern in a fixed font for better legibility)
 *
 *  P   A   H   N
 *  A P L S I I G
 *  Y   I   R
 *
 *  And then read line by line: "PAHNAPLSIIGYIR"
 *
 *  Write the code that will take a string and make this conversion given a number of rows:
 */
const complement = (n, target) => target - n;

const nthEven = n => {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return (2 * n) - 2;
};

const pulser = (start, a, b) => {
  let i = 0;
  let j = start;
  let first = true;

  return () => {
    if (!first) {
      const next = i++ % 2 === 0 ? a : b;
      return j += next;
    }

    first = false;
    return j;
  };
};

const convert = (str, rows) => {
  const gap = nthEven(rows);
  let response = '';

  for (let row = 0; row < rows; row++) {
    const offsetA = (gap - (2 * row)) || gap;
    const offsetB = complement(offsetA, gap) || gap;
    const pulse = pulser(row, offsetA, offsetB);


    for (let i = pulse(); i < str.length; i = pulse()) {
      response += str[i];
    }
  }

  return response;
};

const str = 'PAYPALISHIRING';
const rows = 3;
console.log(convert(str, rows));

