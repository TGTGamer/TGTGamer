/**
 * @format
 * -----
 * Project: TGTGamer
 * File: 1480_running_sum_of_1d_array.ts
 * Path: \portfolio\LeetCode\1480_running_sum_of_1d_array\1480_running_sum_of_1d_array.ts
 * Created Date: Tuesday, January 16th 2024
 * Author: Jonathan Stevens (Email: jonathan@resnovas.com, Github: https://github.com/TGTGamer)
 * -----
 * Contributing: Please read through our contributing guidelines. Included are directions for opening
 * issues, coding standards, and notes on development. These can be found at https://github.com/TGTGamer/blob/develop/CONTRIBUTING.md
 * 
 * Code of Conduct: This project abides by the Contributor Covenant, version 2.0. Please interact in ways that contribute to an open,
 * welcoming, diverse, inclusive, and healthy community. Our Code of Conduct can be found at https://github.com/TGTGamer/blob/develop/CODE_OF_CONDUCT.md
 * -----
 * Copyright (c) 2024 Resnovas - All Rights Reserved
 * LICENSE: Creative Commons Zero v1.0 Universal (CC0-1.0)
 * -----
 * This program has been provided under confidence of the copyright holder and is 
 * licensed for copying, distribution and modification under the terms of
 * the Creative Commons Zero v1.0 Universal (CC0-1.0) published as the License,
 * or (at your option) any later version of this license.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * Creative Commons Zero v1.0 Universal for more details.
 * 
 * You should have received a copy of the Creative Commons Zero v1.0 Universal
 * along with this program. If not, please write to: jonathan@resnovas.com,
 * or see https://creativecommons.org/publicdomain/zero/1.0/legalcode
 * 
 * DELETING THIS NOTICE AUTOMATICALLY VOIDS YOUR LICENSE - PLEASE SEE THE LICENSE FILE FOR DETAILS
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
  let total: number = 0
  // Create a new array to store the running sum
  let runningSum: number[] = []
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
  let runningSum: number[] = []
  // Iterate over the array
  for (let i in nums) {
      runningSum.push(nums[i] + (Number(i) > 0 ? runningSum[Number(i) - 1] : 0))
  }
  return runningSum
};