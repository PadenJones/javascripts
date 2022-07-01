/**
 *  Given an array of strings. How many ways can you combine
 *  two strings if the beginning and end words are the same, and vice versa.
 */

const data = [
    'a b c',
    'c d e',
    'y z a',
];

const prefixes = {};
const suffixes = {};

const splitWord = (word, starts, ends, matches) => {
    const splits = word.split(' ');

    for (let i = 0; i < splits.length; i++) {
        const lhs = splits.slice(0, i).join(' ');
        const rhs = splits.slice(i).join(' ');

        starts[rhs] = Array.isArray(starts[rhs]) ? [...starts[rhs], lhs] : [lhs];
        ends[lhs] = Array.isArray(ends[lhs]) ? [...ends[lhs], rhs] : [rhs];

        if (prefixes[lhs]) {
            matches.push(...prefixes[lhs].map(x => `${x} ${word}`));
        }
        if (suffixes[rhs]) {
            matches.push(...suffixes[rhs].map(x => `${word} ${x}`));
        }
    }
}

const matches = [];
data.forEach((datum, index) => splitWord(datum, prefixes, suffixes, matches));

console.log('matches: ', matches);

