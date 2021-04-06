const assert = require("assert");

/**
 * Find the highest possible profit given an array of integers where array contains
 * the stock price (as an integer) for a each day (in chronological order).
 * Example: prices = [7,1,5,3,6,4] ==> 7
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let diffs = [];
  for (let i = 0; i < prices.length - 1; i++) {
    diffs.push(prices[i + 1] - prices[i]);
  }
  let maxProfit = 0;
  for (let i = 0; i < diffs.length; i++) {
    if (diffs[i] > 0) {
      maxProfit += diffs[i];
    }
  }
  return maxProfit;
};

const tests = [
  { input: [7, 1, 5, 3, 6, 4], output: 7 },
  { input: [1, 2, 3, 4, 5], output: 4 },
  { input: [7, 6, 4, 3, 1], output: 0 },
];

tests.forEach((t) => {
  assert.strictEqual(maxProfit(t.input), t.output);
});

console.log("tests completed successfully");
// /**
//  * Loop through the array defining the statistics
//  * @param {number[]} prices
//  * @return {Stats}
//  */
// var calcStats = function (prices) {
//   let min,
//     max = prices[0];
//   let minIndex,
//     maxIndex = 0;

//   let trends = [];
//   for (let i = 1; i < prices.length; i++) {
//     // update the min if it is greater than current value
//     if (min > prices[i]) {
//       min = prices[i];
//       minIndex = i;
//     }

//     // update the max if it is less than the current value
//     if (max < prices[i]) {
//       max = prices[i];
//       maxIndex = i;
//     }

//     if (prices[i] > prices[i - 1]) {
//       // up
//       trends.push(1);
//     } else if (prices[i] === prices[i - 1]) {
//       // same
//       trends.push(0);
//     } else {
//       // down
//       trend.push(-1);
//     }
//   }
//   return new Stats(trends, max, maxIndex, min, minIndex);
// };

// class Stats {
//   constructor(trends, max, maxIndex, min, minIndex) {
//     this.trends = trends;
//     this.max = max;
//     this.maxIndex = maxIndex;
//     this.min = min;
//     this.minIndex;
//   }
// }

// //  const diffs = [];
// //   let i = 0;
// //   while (i < prices.length - 1) {
// //     diffs.push(prices[i + 1] - prices[i]);
// //     i++;
// //   }
// //   i = 0;
// //   let transactions = [];
// //   while (i < diffs.length) {
// //     if (diffs[i] === 0) {
// //       // no change
// //       continue;
// //     } else if (diffs[i] < 0) {
// //       // price decrease
// //       continue;
// //     } else {
// //       // price increase
// //       transactions.push("buy");
// //     }
// //   }
