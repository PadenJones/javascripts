// We have some clickstream data that we gathered on our client's
// website. Using cookies, we collected snippets of users'
// anonymized URL histories while they browsed the site. The histories are
// in chronological order and no URL was visited more
// than once per person.

// Write a function that takes two users' browsing histories
// as input and returns the longest contiguous sequence
// of URLs that appears in both.

// Sample input:

// user0 = ["/start", "/pink", "/register", "/orange", "/red", "a"]

// user1 = ["/start", "/green", "/blue", "/pink", "/register", "/orange", "/one/two"]

// user2 = ["a", "/one", "/two"]

// user3 = ["/pink", "/orange", "/yellow", "/plum", "/blue", "/tan", "/red",
//          "/amber", "/HotRodPink", "/CornflowerBlue", "/LightGoldenRodYellow", "/BritishRacingGreen"]

// user4 = ["/pink", "/orange", "/amber", "/BritishRacingGreen", "/plum", "/blue", "/tan",
//          "/red", "/lavender", "/HotRodPink", "/CornflowerBlue", "/LightGoldenRodYellow"]

// user5 = ["a"]

const user0 = ["/start", "/pink", "/register", "/orange", "/red", "a"];
const user1 = ["/start", "/green", "/blue", "/pink", "/register", "/orange", "/one/two"];
const user2 = ["a", "/one", "/two"];
const user3 = ["/pink", "/orange", "/yellow", "/plum", "/blue", "/tan", "/red", "/amber", "/HotRodPink", "/CornflowerBlue", "/LightGoldenRodYellow", "/BritishRacingGreen"];
const user4 = ["/pink", "/orange", "/amber", "/BritishRacingGreen", "/plum", "/blue", "/tan", "/red", "/lavender", "/HotRodPink", "/CornflowerBlue", "/LightGoldenRodYellow"];
const user5 = ["a"];

function getMatchingLength(subUserA, subUserB) {
  let count = 0;

  for (let i = 0; i < subUserA.length; i++) {
    if (subUserA[i] === subUserB[i]) {
      count++;
    } else {
      return count;
    }
  }

  return count;
}

// Not optimal - can use dynamic programming
function findContiguousHistory(userA, userB) {
  let max = 0;
  let history = [];

  for (let i = 0; i < userA.length; i++) {
    for (let j = 0; j < userB.length; j++) {
      if (userA[i] === userB[j]) {
        const len = getMatchingLength(userA.slice(i, userA.length), userB.slice(j, userB.length));

        if (len > max) {
          max = len;
          history = userA.slice(i, i + max);
        }
      }
    }
  }

  return history;
}

console.log(findContiguousHistory(user0, user1)); // ['/pink', '/register', '/orange']

console.log(findContiguousHistory(user1, user2)); // []

console.log(findContiguousHistory(user2, user0)); // ['a']

console.log(findContiguousHistory(user5, user2)); // ['a']

console.log(findContiguousHistory(user3, user4)); // ['/plum', '/blue', '/tan', '/red']

console.log(findContiguousHistory(user4, user3)); // ['/plum', '/blue', '/tan', '/red']