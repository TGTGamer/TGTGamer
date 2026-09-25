/*
 * Project: TGTGamer
 * File: 1480_running_sum_of_1d_array.ts
 * Last Modified: 2026-09-25
 *
 * Contributing: Please read through our contributing guidelines. Included are directions for opening issues, coding standards,
 * and notes on development. These can be found at
 * https://github.com/TGTGamer/TGTGamer/blob/main/CONTRIBUTING.md
 *
 * Code of Conduct: This project abides by the Contributor Covenant, v2.0. Please interact in ways that contribute to an open,
 * welcoming, diverse, inclusive, and healthy community. Our Code of Conduct can be found at
 * https://github.com/TGTGamer/TGTGamer/blob/main/CODE_OF_CONDUCT.md
 *
 * Copyright (c) 2026 Jonathan Stevens T/A Resnovas. All Rights Reserved
 * LICENSE: Fair Core License, Version 1.0, MIT Future License (FCL-1.0-MIT)
 *
 * This program has been provided under confidence of the copyright holder and is licensed for copying, distribution and
 * modification under the terms of the Fair Core License, Version 1.0, MIT Future License (FCL-1.0-MIT) published as the License, or
 * (at your option) any later version of this license. You must not move, change, disable, or circumvent the license key functionality
 * in the Software; or modify any portion of the Software protected by the license key to: enable access to the protected
 * functionality without a valid license key; or remove the protected functionality. This program is distributed in the hope that it
 * will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
 * PARTICULAR PURPOSE. See the Fair Core License, Version 1.0, MIT Future License for more details. You should have received a
 * copy of the Fair Core License, Version 1.0, MIT Future License along with this program. If not, please write to:
 * hello@resnovas.com, see the official website https://fcl.dev/ or review the GitHub repository
 * https://github.com/keygen-sh/fcl.dev/
 *
 * This project abides the Resnovas Cooperation Commitment. Adapted from the GPL Cooperation Commitment (GPLCC). Before filing
 * or continuing to prosecute any legal proceeding or claim (other than a Defensive Action) arising from termination of a Covered
 * License, we commit to adhering to the Resnovas Cooperation Commitment. You should have received a copy of the Resnovas
 * Cooperation Commitment along with this program. If not, please write to: hello@resnovas.com, or see
 * https://github.com/TGTGamer/TGTGamer/blob/main/COOPERATION_COMMITMENT.md
 *
 * DELETING THIS NOTICE AUTOMATICALLY VOIDS YOUR LICENSE
 */

// Attempt one

/**
 * Calculates the running sum of an array of numbers.
 * @author Jonathan Stevens (@TGTGamer)
 *
 * @export
 * @param {number[]} nums An array of numbers
 * @returns {number[]} This function takes an array of numbers and calculates the running sum, returning an array of the running sums.
 */
export function runningSum(nums: number[]): number[] {
  // Let a total number so that we can only iterate once over the array
  let total = 0
  // Create a new array to store the running sum
  const runningSum: number[] = []
  // Iterate over the array
  nums.forEach(num => {
      total += num
      runningSum.push(total)
  })
  // return the running sum
  return runningSum
};

// Attempt two after realising I can add the previous number to the current number :facepalm:

/**
 * Calculates the running sum of an array of numbers. Each element in the resulting array is the sum of all the elements that come before it (including itself).
 * @author Jonathan Stevens (@TGTGamer)
 *
 * @export
 * @param {number[]} nums An array of numbers.
 * @returns {number[]} This function takes an array of numbers and returns a new array where each element is the sum of all previous elements in the input array, including itself.
 */
export function runningSumv2(nums: number[]): number[] {
  // Create a new array to store the running sum
  const runningSum: number[] = []
  // Iterate over the array
  for (const i in nums) {
      runningSum.push(nums[i] + (Number(i) > 0 ? runningSum[Number(i) - 1] : 0))
  }
  return runningSum
};