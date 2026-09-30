/*
 * Project: TGTGamer
 * File: 206_reverse_linked_list.ts
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

export class ListNode {
  /**
   * The val property represents a numeric value.
   * @author Jonathan Stevens (@TGTGamer)
   *
   * @type {(number | undefined)}
   */
  val: number | undefined
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
