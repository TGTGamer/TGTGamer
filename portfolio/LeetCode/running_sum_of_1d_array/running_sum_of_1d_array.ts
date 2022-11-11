/*
 * Project: TGTGamer
 * File: running_sum_of_1d_array.ts
 * Path: \portfolio\LeetCode\running_sum_of_1d_array\running_sum_of_1d_array.ts
 * Created Date: Friday, November 11th 2022
 * Author: Jonathan Stevens (Email: jonathan@resnovas.com, Github: https://github.com/TGTGamer)
 * -----
 * Contributing: Please read through our contributing guidelines. Included are directions for opening
 * issues, coding standards, and notes on development. These can be found at https://github.com/TGTGamer/CONTRIBUTING.md
 * 
 * Code of Conduct: This project abides by the Contributor Covenant, version 2.0. Please interact in ways that contribute to an open,
 * welcoming, diverse, inclusive, and healthy community. Our Code of Conduct can be found at https://github.com/TGTGamer/CODE_OF_CONDUCT.md
 * -----
 * Copyright (c) 2022 Resnovas - All Rights Reserved
 * LICENSE: GNU General Public License v3.0 or later (GPL-3.0+)
 * -----
 * This program has been provided under confidence of the copyright holder and is 
 * licensed for copying, distribution and modification under the terms of
 * the GNU General Public License v3.0 or later (GPL-3.0+) published as the License,
 * or (at your option) any later version of this license.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License v3.0 or later for more details.
 * 
 * You should have received a copy of the GNU General Public License v3.0 or later
 * along with this program. If not, please write to: jonathan@resnovas.com,
 * or see https://www.gnu.org/licenses/gpl-3.0-standalone.html
 * 
 * DELETING THIS NOTICE AUTOMATICALLY VOIDS YOUR LICENSE - PLEASE SEE THE LICENSE FILE FOR DETAILS
 * -----
 * Last Modified: 11-11-2022
 * By: Jonathan Stevens (Email: jonathan@resnovas.com, Github: https://github.com/TGTGamer)
 * Current Version: <<projectversion>>
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

// Attempt one

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

export function runningSumv2(nums: number[]): number[] {
  // Create a new array to store the running sum
  let runningSum: number[] = []
  // Iterate over the array
  for (let i in nums) {
      runningSum.push(nums[i] + (Number(i) > 0 ? runningSum[Number(i) - 1] : 0))
  }
  return runningSum
};