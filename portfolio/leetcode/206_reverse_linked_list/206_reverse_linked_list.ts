/**
 * @format
 * -----
 * Project: TGTGamer
 * File: 206_reverse_linked_list.ts
 * Path: \portfolio\LeetCode\206_reverse_linked_list\206_reverse_linked_list.ts
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
   * The val property represents a numeric value.
   * @author Jonathan Stevens (@TGTGamer)
   *
   * @type {number}
   */
  val: number
  /**
   * Represents the next node in a linked list. It can either be a reference to another `ListNode` object or `null` to indicate the end of the list.
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
      this.val = val
      this.next = (next===undefined ? null : next)
  }
}

/**
 * Reverses a linked list and returns the new head node.
 * @author Jonathan Stevens (@TGTGamer)
 *
 * @export
 * @returns {ListNode} Reverses a linked list.
 */
export function ReverseLinkedList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null
  let curr: ListNode | null = head
  while (curr) {
      const next = curr.next
      curr.next = prev
      prev = curr
      curr = next
  }
  return prev
}
