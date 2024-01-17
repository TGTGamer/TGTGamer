/**
 * @format
 * -----
 * Project: TGTGamer
 * File: 21_merge_two_sorted_lists.ts
 * Path: \portfolio\LeetCode\21_merge_two_sorted_lists\21_merge_two_sorted_lists.ts
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

export class ListNode {
  /**
   * The `val` property is a number value.
   * @author Jonathan Stevens (@TGTGamer)
   *
   * @type {number}
   */
  val: number
  /**
   * The `next` property is a reference to the next `ListNode` object in the linked list. It can either be a `ListNode` object or `null` if there is no next node.
   * @author Jonathan Stevens (@TGTGamer)
   *
   * @type {(ListNode | null)}
   */
  next: ListNode | null
  /**
   * Creates an instance of ListNode.
   * @author Jonathan Stevens (@TGTGamer)
   *
   * @constructor
   * @param {?number} [val]
   * @param {?(ListNode | null)} [next]
   */
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}

/**
 * Merges two sorted lists into a single sorted list.
 * @author Jonathan Stevens (@TGTGamer)
 *
 * @export
 * @param {(ListNode | null)} list1 The first sorted list
 * @param {(ListNode | null)} list2 The second sorted list
 * @returns {(ListNode | null)} Merges two sorted lists and returns the head of the merged list.
 */
export function MergeTwoSortedLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1) return list2;
  else if (!list2) return list1;
  else if (list1.val < list2.val) {
      list1.next = MergeTwoSortedLists(list1.next, list2);
      return list1;
  } 
  list2.next = MergeTwoSortedLists(list1, list2.next);
  return list2;
}