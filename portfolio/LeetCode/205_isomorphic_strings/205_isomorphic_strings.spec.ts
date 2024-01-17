/**
 * @format
 * -----
 * Project: TGTGamer
 * File: 205_isomorphic_strings.spec.ts
 * Path: \portfolio\LeetCode\205_isomorphic_strings\205_isomorphic_strings.spec.ts
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

import { IsomorphicStrings } from './205_isomorphic_strings.js';

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
    it('should return true when given two strings with the same repeated character mapping', () => {
      // Given
      const s = 'foo';
      const t = 'bar';

      // When
      const result = IsomorphicStrings(s, t);

      // Then
      expect(result).toBe(true);
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
    it('should return false when given two strings with the same character mapping but some characters map to the same character', () => {
      // Given
      const s = 'paper';
      const t = 'title';

      // When
      const result = IsomorphicStrings(s, t);

      // Then
      expect(result).toBe(false);
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

