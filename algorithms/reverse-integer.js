// https://leetcode.com/problems/reverse-integer/

/*
  Problem: Given a 32-bit signed integer, reverse digits of an integer.
 */

function reverse(x) {
  let response = 0;

  while (x > 0) {
    response = (response * 10) + (x % 10);
    x = Number.parseInt(x / 10);
  }

  return response;
}

console.log(reverse(9096));
