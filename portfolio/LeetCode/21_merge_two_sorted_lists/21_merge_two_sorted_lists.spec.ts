/**
 * @format
 * -----
 * Project: TGTGamer
 * File: 21_merge_two_sorted_lists.spec.ts
 * Path: \portfolio\LeetCode\21_merge_two_sorted_lists\21_merge_two_sorted_lists.spec.ts
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

import { ListNode, MergeTwoSortedLists } from './21_merge_two_sorted_lists.js';

describe('MergeTwoSortedLists', () => {

  // Merging two non-empty sorted lists of equal length
  it('should merge two non-empty sorted lists of equal length', () => {
    // Ahoy, matey! Let's create two sorted lists of equal length
    const list1 = new ListNode(1);
    list1.next = new ListNode(3);
    list1.next.next = new ListNode(5);

    const list2 = new ListNode(2);
    list2.next = new ListNode(4);
    list2.next.next = new ListNode(6);

    // Shiver me timbers! Let's merge the two lists
    const mergedList = MergeTwoSortedLists(list1, list2);

    // Avast ye! The merged list should be 1 -> 2 -> 3 -> 4 -> 5 -> 6
    expect(mergedList?.val).toBe(1);
    expect(mergedList?.next?.val).toBe(2);
    expect(mergedList?.next?.next?.val).toBe(3);
    expect(mergedList?.next?.next?.next?.val).toBe(4);
    expect(mergedList?.next?.next?.next?.next?.val).toBe(5);
    expect(mergedList?.next?.next?.next?.next?.next?.val).toBe(6);
    expect(mergedList?.next?.next?.next?.next?.next?.next).toBeNull();
  });

  // Merging two non-empty sorted lists of different lengths
  it('should merge two non-empty sorted lists of different lengths', () => {
    // Yo ho ho! Let's create two sorted lists of different lengths
    const list1 = new ListNode(1);
    list1.next = new ListNode(3);
    list1.next.next = new ListNode(5);

    const list2 = new ListNode(2);
    list2.next = new ListNode(4);

    // Arrr! Let's merge the two lists
    const mergedList = MergeTwoSortedLists(list1, list2);

    // Avast ye! The merged list should be 1 -> 2 -> 3 -> 4 -> 5
    expect(mergedList?.val).toBe(1);
    expect(mergedList?.next?.val).toBe(2);
    expect(mergedList?.next?.next?.val).toBe(3);
    expect(mergedList?.next?.next?.next?.val).toBe(4);
    expect(mergedList?.next?.next?.next?.next?.val).toBe(5);
    expect(mergedList?.next?.next?.next?.next?.next).toBeNull();
  });

  // Merging two empty lists
  it('should merge two empty lists', () => {
    // Yo ho ho and a bottle of rum! Let's create two empty lists
    const list1 = null;
    const list2 = null;

    // Shiver me timbers! Let's merge the two lists
    const mergedList = MergeTwoSortedLists(list1, list2);

    // Avast ye! The merged list should be null
    expect(mergedList).toBeNull();
  });

  // Merging a non-empty sorted list with an empty list
  it('should merge a non-empty sorted list with an empty list', () => {
    // Ahoy, matey! Let's create a non-empty sorted list
    const list1 = new ListNode(1);
    list1.next = new ListNode(3);
    list1.next.next = new ListNode(5);

    const list2 = null;

    // Arrr! Let's merge the two lists
    const mergedList = MergeTwoSortedLists(list1, list2);

    // Avast ye! The merged list should be 1 -> 3 -> 5
    expect(mergedList?.val).toBe(1);
    expect(mergedList?.next?.val).toBe(3);
    expect(mergedList?.next?.next?.val).toBe(5);
    expect(mergedList?.next?.next?.next).toBeNull();
  });

  // Merging two sorted lists with duplicate values
  it('should merge two sorted lists with duplicate values', () => {
    // Yo ho ho! Let's create two sorted lists with duplicate values
    const list1 = new ListNode(1);
    list1.next = new ListNode(3);
    list1.next.next = new ListNode(5);

    const list2 = new ListNode(3);
    list2.next = new ListNode(4);
    list2.next.next = new ListNode(6);

    // Shiver me timbers! Let's merge the two lists
    const mergedList = MergeTwoSortedLists(list1, list2);

    // Avast ye! The merged list should be 1 -> 3 -> 3 -> 4 -> 5 -> 6
    expect(mergedList?.val).toBe(1);
    expect(mergedList?.next?.val).toBe(3);
    expect(mergedList?.next?.next?.val).toBe(3);
    expect(mergedList?.next?.next?.next?.val).toBe(4);
    expect(mergedList?.next?.next?.next?.next?.val).toBe(5);
    expect(mergedList?.next?.next?.next?.next?.next?.val).toBe(6);
    expect(mergedList?.next?.next?.next?.next?.next?.next).toBeNull();
  });

  // Merging two sorted lists with negative values
  it('should merge two sorted lists with negative values', () => {
    // Ahoy, matey! Let's create two sorted lists with negative values
    const list1 = new ListNode(-5);
    list1.next = new ListNode(-3);
    list1.next.next = new ListNode(-1);

    const list2 = new ListNode(-4);
    list2.next = new ListNode(-2);
    list2.next.next = new ListNode(0);

    // Arrr! Let's merge the two lists
    const mergedList = MergeTwoSortedLists(list1, list2);

    // Avast ye! The merged list should be -5 -> -4 -> -3 -> -2 -> -1 -> 0
    expect(mergedList?.val).toBe(-5);
    expect(mergedList?.next?.val).toBe(-4);
    expect(mergedList?.next?.next?.val).toBe(-3);
    expect(mergedList?.next?.next?.next?.val).toBe(-2);
    expect(mergedList?.next?.next?.next?.next?.val).toBe(-1);
    expect(mergedList?.next?.next?.next?.next?.next?.val).toBe(0);
    expect(mergedList?.next?.next?.next?.next?.next?.next).toBeNull();
  });

  // Merging two lists with a single node each
  it('should merge two lists with a single node each', () => {
    // Yo ho ho! Let's create two lists with a single node each
    const list1 = new ListNode(1);
    const list2 = new ListNode(2);

    // Shiver me timbers! Let's merge the two lists
    const mergedList = MergeTwoSortedLists(list1, list2);

    // Avast ye! The merged list should be 1 -> 2
    expect(mergedList?.val).toBe(1);
    expect(mergedList?.next?.val).toBe(2);
    expect(mergedList?.next?.next).toBeNull();
  });

  // Merging two lists with multiple nodes but only one node with a value
  it('should merge two lists with multiple nodes but only one node with a value', () => {
    // Ahoy, matey! Let's create two lists with multiple nodes but only one node with a value
    const list1 = new ListNode(0);
    list1.next = new ListNode(0);
    list1.next.next = new ListNode(0);

    const list2 = new ListNode(1);
    list2.next = new ListNode(1);
    list2.next.next = new ListNode(1);

    // Arrr! Let's merge the two lists
    const mergedList = MergeTwoSortedLists(list1, list2);

    // Avast ye! The merged list should be 0 -> 0 -> 0 -> 1 -> 1 -> 1
    expect(mergedList?.val).toBe(0);
    expect(mergedList?.next?.val).toBe(0);
    expect(mergedList?.next?.next?.val).toBe(0);
    expect(mergedList?.next?.next?.next?.val).toBe(1);
    expect(mergedList?.next?.next?.next?.next?.val).toBe(1);
    expect(mergedList?.next?.next?.next?.next?.next?.val).toBe(1);
    expect(mergedList?.next?.next?.next?.next?.next?.next).toBeNull();
  });

  // Merging two lists with multiple nodes but all values are the same
  it('should merge two lists with multiple nodes but all values are the same', () => {
    // Yo ho ho! Let's create two lists with multiple nodes but all values are the same
    const list1 = new ListNode(1);
    list1.next = new ListNode(1);
    list1.next.next = new ListNode(1);

    const list2 = new ListNode(1);
    list2.next = new ListNode(1);
    list2.next.next = new ListNode(1);

    // Shiver me timbers! Let's merge the two lists
    const mergedList = MergeTwoSortedLists(list1, list2);

    // Avast ye! The merged list should be 1 -> 1 -> 1 -> 1 -> 1 -> 1
    expect(mergedList?.val).toBe(1);
    expect(mergedList?.next?.val).toBe(1);
    expect(mergedList?.next?.next?.val).toBe(1);
    expect(mergedList?.next?.next?.next?.val).toBe(1);
    expect(mergedList?.next?.next?.next?.next?.val).toBe(1);
    expect(mergedList?.next?.next?.next?.next?.next?.val).toBe(1);
    expect(mergedList?.next?.next?.next?.next?.next?.next).toBeNull();
  });

  // Merging two sorted lists with large values
  it('should merge two sorted lists with large values', () => {
    // Given
    const list1 = new ListNode(100);
    list1.next = new ListNode(200);
    list1.next.next = new ListNode(300);

    const list2 = new ListNode(150);
    list2.next = new ListNode(250);
    list2.next.next = new ListNode(350);

    // When
    const mergedList = MergeTwoSortedLists(list1, list2);

    // Then
    expect(mergedList?.val).toBe(100);
    expect(mergedList?.next?.val).toBe(150);
    expect(mergedList?.next?.next?.val).toBe(200);
    expect(mergedList?.next?.next?.next?.val).toBe(250);
    expect(mergedList?.next?.next?.next?.next?.val).toBe(300);
    expect(mergedList?.next?.next?.next?.next?.next?.val).toBe(350);
    expect(mergedList?.next?.next?.next?.next?.next?.next).toBeNull();
  });

  // Merging two lists with multiple nodes but one list is not sorted
  it('should merge two lists with one unsorted list', () => {
    // Given
    const list1 = new ListNode(1);
    list1.next = new ListNode(3);
    list1.next.next = new ListNode(5);

    const list2 = new ListNode(4);
    list2.next = new ListNode(2);
    list2.next.next = new ListNode(6);

    // When
    const mergedList = MergeTwoSortedLists(list1, list2);

    // Then
    expect(mergedList?.val).toBe(1);
    expect(mergedList?.next?.val).toBe(2);
    expect(mergedList?.next?.next?.val).toBe(3);
    expect(mergedList?.next?.next?.next?.val).toBe(4);
    expect(mergedList?.next?.next?.next?.next?.val).toBe(5);
    expect(mergedList?.next?.next?.next?.next?.next?.val).toBe(6);
    expect(mergedList?.next?.next?.next?.next?.next?.next).toBeNull();
  });

  // Merging two lists with multiple nodes but both lists are not sorted
  it('should merge two lists with both unsorted lists', () => {
    // Given
    const list1 = new ListNode(3);
    list1.next = new ListNode(1);
    list1.next.next = new ListNode(5);

    const list2 = new ListNode(4);
    list2.next = new ListNode(2);
    list2.next.next = new ListNode(6);

    // When
    const mergedList = MergeTwoSortedLists(list1, list2);

    // Then
    expect(mergedList?.val).toBe(1);
    expect(mergedList?.next?.val).toBe(2);
    expect(mergedList?.next?.next?.val).toBe(3);
    expect(mergedList?.next?.next?.next?.val).toBe(4);
    expect(mergedList?.next?.next?.next?.next?.val).toBe(5);
    expect(mergedList?.next?.next?.next?.next?.next?.val).toBe(6);
    expect(mergedList?.next?.next?.next?.next?.next?.next).toBeNull();
  });

  // Testing the function with a large number of nodes in both lists
  it('should merge two non-empty sorted lists of equal length', () => {
    // Given
    const list1 = new ListNode(1);
    list1.next = new ListNode(3);
    list1.next.next = new ListNode(5);

    const list2 = new ListNode(2);
    list2.next = new ListNode(4);
    list2.next.next = new ListNode(6);

    // When
    const mergedList = MergeTwoSortedLists(list1, list2);

    // Then
    expect(mergedList?.val).toBe(1);
    expect(mergedList?.next?.val).toBe(2);
    expect(mergedList?.next?.next?.val).toBe(3);
    expect(mergedList?.next?.next?.next?.val).toBe(4);
    expect(mergedList?.next?.next?.next?.next?.val).toBe(5);
    expect(mergedList?.next?.next?.next?.next?.next?.val).toBe(6);
    expect(mergedList?.next?.next?.next?.next?.next?.next).toBeNull();
  });

  // Testing the function with a very large number of nodes in both lists
  it('should merge two very large sorted lists', () => {
    // Given
    const list1 = new ListNode(1);
    let current1 = list1;
    for (let i = 2; i <= 10000; i++) {
      current1.next = new ListNode(i);
      current1 = current1.next;
    }

    const list2 = new ListNode(10001);
    let current2 = list2;
    for (let i = 10002; i <= 20000; i++) {
      current2.next = new ListNode(i);
      current2 = current2.next;
    }

    // When
    const mergedList = MergeTwoSortedLists(list1, list2);

    // Then
    let current: undefined | ListNode | null = mergedList;
    for (let i = 1; i <= 20000; i++) {
      expect(current?.val).toBe(i);
      current = current?.next;
    }
    expect(current).toBeNull();
  });

  // Testing the function with lists that have alternating values
  it('should merge two non-empty sorted lists of alternating values', () => {
    // Given
    const list1 = new ListNode(1);
    list1.next = new ListNode(3);
    list1.next.next = new ListNode(5);

    const list2 = new ListNode(2);
    list2.next = new ListNode(4);
    list2.next.next = new ListNode(6);

    // When
    const mergedList = MergeTwoSortedLists(list1, list2);

    // Then
    expect(mergedList?.val).toBe(1);
    expect(mergedList?.next?.val).toBe(2);
    expect(mergedList?.next?.next?.val).toBe(3);
    expect(mergedList?.next?.next?.next?.val).toBe(4);
    expect(mergedList?.next?.next?.next?.next?.val).toBe(5);
    expect(mergedList?.next?.next?.next?.next?.next?.val).toBe(6);
    expect(mergedList?.next?.next?.next?.next?.next?.next).toBeNull();
  });

  // Testing the function with lists that have values in random order
  it('should merge a non-empty sorted list containing a single value with an empty sorted list', () => {
    // Given
    // Create a non-empty sorted list containing a single value
    const list1 = new ListNode(1);

    // Create an empty sorted list
    const list2 = null;

    // When
    // Merge the two lists
    const mergedList = MergeTwoSortedLists(list1, list2);

    // Then
    // The merged list should be the same as the non-empty sorted list
    expect(mergedList?.val).toBe(1);
    expect(mergedList?.next).toBeNull();
  });

  // Testing the function with lists that have values in descending order
  it('should merge two non-empty sorted lists with one list containing duplicate values at the beginning', () => {
    // Given
    const list1 = new ListNode(5);
    list1.next = new ListNode(3);
    list1.next.next = new ListNode(1);

    const list2 = new ListNode(5);
    list2.next = new ListNode(4);
    list2.next.next = new ListNode(2);

    // When
    const mergedList = MergeTwoSortedLists(list1, list2);

    // Then
    expect(mergedList?.val).toBe(5);
    expect(mergedList?.next?.val).toBe(5);
    expect(mergedList?.next?.next?.val).toBe(4);
    expect(mergedList?.next?.next?.next?.val).toBe(3);
    expect(mergedList?.next?.next?.next?.next?.val).toBe(2);
    expect(mergedList?.next?.next?.next?.next?.next?.val).toBe(1);
    expect(mergedList?.next?.next?.next?.next?.next?.next).toBeNull();
  });
});


