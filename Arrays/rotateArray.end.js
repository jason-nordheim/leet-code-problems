const assert = require("assert");

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const removedElements = nums.splice(nums.length - k, k);
  while (removedElements.length > 0) {
    nums.unshift(removedElements.pop());
  }
  return nums;
};

const tests = [
  {
    input: { nums: [1, 2, 3, 4, 5, 6, 7], k: 3 },
    output: [5, 6, 7, 1, 2, 3, 4],
  },
  {
    input: { nums: [-1, -100, 3, 99], k: 2 },
    output: [3, 99, -1, -100],
  },
];

tests.forEach((t) => {
  const result = rotate(t.input.nums, t.input.k);
  assert.strictEqual(result.length, t.output.length);
  t.output.forEach((val, ind) => {
    const act = result[ind];
    assert.strictEqual(act, val);
  });
});

console.log("all tests passed");
