/*
 * Project: TGTGamer
 * File: 205_isomorphic_strings.spec.ts
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

import { describe, expect, it } from "vitest"
import { IsomorphicStrings } from "../../../packages/leetcode/src/205_isomorphic_strings.js";

describe('IsomorphicStrings', () => {

    // Should return true when given two identical strings
    it('should return true when given two identical strings', () => {
      // Given
      const s = 'abc';
      const t = 'abc';

      // When
      const result = IsomorphicStrings(s, t);

      // Then
      expect(result).toBe(true);
    });

    // Should return true when given two strings with the same character mapping
    it('should return true when given two strings with the same character mapping', () => {
      // Given
      const s = 'egg';
      const t = 'add';

      // When
      const result = IsomorphicStrings(s, t);

      // Then
      expect(result).toBe(true);
    });

    // Should return true when given two empty strings
    it('should return true when given two empty strings', () => {
      // Given
      const s = '';
      const t = '';

      // When
      const result = IsomorphicStrings(s, t);

      // Then
      expect(result).toBe(true);
    });

    // Should return true when given two strings with the same repeated character mapping
    // Expectation corrected: "foo" and "bar" are not isomorphic (LeetCode 205): "o" would have to map to both "a" and "r".
    it('should return false when a repeated character must map to two different characters', () => {
      // Given
      const s = 'foo';
      const t = 'bar';

      // When
      const result = IsomorphicStrings(s, t);

      // Then
      expect(result).toBe(false);
    });

    // Should return true when given two strings with the same character mapping but different lengths
    it('should return true when given two strings with the same character mapping but different lengths', () => {
      // Given
      const s = 'paper';
      const t = 'title';

      // When
      const result = IsomorphicStrings(s, t);

      // Then
      expect(result).toBe(true);
    });

    // Should return true when given two strings with the same character mapping but different orders
    it('should return true when given two strings with the same character mapping but different orders', () => {
      // Given
      const s = 'listen';
      const t = 'silent';

      // When
      const result = IsomorphicStrings(s, t);

      // Then
      expect(result).toBe(true);
    });

    // Should return false when given two strings with different lengths
    it('should return false when given two strings with different lengths', () => {
      // Given
      const s = 'foo';
      const t = 'barbaz';

      // When
      const result = IsomorphicStrings(s, t);

      // Then
      expect(result).toBe(false);
    });

    // Should return false when given two strings with different character mappings
    it('should return false when given two strings with different character mappings', () => {
      // Given
      const s = 'foo';
      const t = 'baz';

      // When
      const result = IsomorphicStrings(s, t);

      // Then
      expect(result).toBe(false);
    });

    // Should return false when given two strings with the same character mapping but some characters map to the same character
    // Expectation corrected: "paper" and "title" is LeetCode 205 example 3, whose answer is true.
    it('should return true for the LeetCode "paper" / "title" example', () => {
      // Given
      const s = 'paper';
      const t = 'title';

      // When
      const result = IsomorphicStrings(s, t);

      // Then
      expect(result).toBe(true);
    });

    // Should return false when given two strings with the same character mapping but some characters map to the same character and the same character is used twice
    it('should return false when given two strings with the same character mapping but some characters map to the same character and the same character is used twice', () => {
      // Given
      const s = 'paper';
      const t = 'titlee';

      // When
      const result = IsomorphicStrings(s, t);

      // Then
      expect(result).toBe(false);
    });

    // Should handle strings with non-ASCII characters
    it('should handle strings with non-ASCII characters', () => {
      // Given
      const s = 'café';
      const t = 'cafe\u0301';

      // When
      const result = IsomorphicStrings(s, t);

      // Then
      expect(result).toBe(true);
    });

    // Should handle strings with special characters
    it('should handle strings with special characters', () => {
      // Given
      const s = 'hello, world!';
      const t = 'h3ll0, w0rld!';

      // When
      const result = IsomorphicStrings(s, t);

      // Then
      expect(result).toBe(true);
    });
});

it.each([
    ['😀😀', 'ab', false],
    ['😀😀', 'aa', true],
    ['ab', '😀😀', false],
    ['😀😃😀', 'xyx', true],
    ['😀a', 'xy', true],
    ['éé', 'e\u0301e\u0301', true]
])('maps complete characters in %s and %s', (s, t, expected) => {
    expect(IsomorphicStrings(s, t)).toBe(expected)
})
