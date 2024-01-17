/**
 * @format
 * -----
 * Project: TGTGamer
 * File: 724_find_pivot_index.ts
 * Path: \portfolio\LeetCode\724_find_pivot_index\724_find_pivot_index.ts
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



/**
 * This function finds the pivot index in an array. The pivot index is the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index. If no pivot index is found, -1 is returned.
 * @param nums - The array of numbers.
 * @return The pivot index.
 * @author Jonathan Stevens (@TGTGamer)
 *
 * @export
 * @param {number[]} nums An array of numbers
 * @returns {number} Function that finds the pivot index in an array
 */
export function pivotIndexSlow(nums: number[]): number {

  // First return -1 if array is empty or less than one element
  if (nums.length <= 1) return -1

  // lets find the middle of the array if greater than 0
  let middle = Math.floor(nums.length / 2)

  // lets create an index to check
  let index: Boolean | Number | null = null

  // While the index is not a number, it's not finished computing, so lets keep looping
  while (typeof (index) !== "number") {
      // update the index with the function
      index = findIndex(nums, middle) //?
      if (index == true) middle-- //?
      else if (index == false) middle++ //?

      // If the index (middle) is outside of the array, return -1
      if (middle < 0 || middle > nums.length - 1) index = -1
  }
  return index //?
};


/**
 * Returns the index of an array where the sum of the numbers on the left side is equal to the sum of the numbers on the right side. If the left sum is greater than the right sum, returns true. If the right sum is greater than the left sum, returns false.
 * @param nums - The array of numbers.
 * @param index - The index to start partitioning the array.
 * @author Jonathan Stevens (@TGTGamer)
 *
 * @param {number[]} nums An array of numbers
 * @param {number} index The index to compare the sums
 * @returns {(Number | Boolean)} This function takes in an array of numbers and an index, and returns either the index if the sum of the numbers on the left side is equal to the sum of the numbers on the right side, true if the sum on the left side is greater, or false if the sum on the right side is greater.
 */
function findIndex(nums: number[], index: number): Number | Boolean {
  let leftSum = 0
  for (let i = 0; i < index; i++) {
      leftSum += nums[i]
  }

  // lets find the sum of the right side of the array
  let rightSum = 0
  for (let i = index + 1; i < nums.length; i++) {
      rightSum += nums[i]
  }

  // lets compare the left and right sums
  if (leftSum === rightSum) return index
  else if (leftSum > rightSum) return true
  else return false
}

/**
 * Calculates the index of the pivot element in the given array.
 * The pivot element is defined as the index where the sum of the numbers to the left of the element is equal to the sum of the numbers to the right of the element.
 * @param nums - The array of numbers.
 * @return The index of the pivot element. Returns -1 if no pivot element exists.
 * @author Jonathan Stevens (@TGTGamer)
 *
 * @export
 * @param {number[]} nums An array of numbers
 * @returns {number} Given an array of numbers, find the pivot index where the sum of all the numbers to the left of the index is equal to the sum of all the numbers to the right of the index. If there is no such index, return -1.
 */
export function pivotIndex(nums: number[]): number {
  let total = 0, compare = 0, index: number | undefined;
  // Calculate the entire sum of the array
  for (let i of nums) total += i
  // calculate the sum of each step, minus from the total (removing the index item) and see if they match
  for (let i in nums) {
      if (compare === (total - compare - nums[Number(i)])) {
          index = Number(i) //?
          break
      }
      compare += nums[i] 
  }
  // If the index is not defined, return -1
  if (index == undefined) return -1
  return index
}