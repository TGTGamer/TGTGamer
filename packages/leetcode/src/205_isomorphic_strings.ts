/*
 * Project: TGTGamer
 * File: 205_isomorphic_strings.ts
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

export function IsomorphicStrings(s: string, t: string): boolean {
  // Strings of different lengths can never map onto each other character for
  // character. Compare normalised code points, so a precomposed "é" and an "e"
  // plus combining accent count as the same length.
  const sCharacters = [...s.normalize()]
  const tCharacters = [...t.normalize()]
  if (sCharacters.length !== tCharacters.length) return false
  const s_map: { [index: string]: number[] } = {}
    // Create a map of the first string and thier indices
    for (const i in sCharacters) {
        // get the letter from the string
        const letter = sCharacters[i]
        // if the letter is not in the array, add it
        if (!s_map[letter]) s_map[letter] = [Number(i)]
        // if the letter is in the array, add the index to the array
        else s_map[letter].push(Number(i))
    }
    // Create an array to store used characters for restriction (No two characters may map to the same character)
    const used_letters: string[] = []

    // Test the second string against the map
    for (const i in s_map) {
        // get the replacement letter
        const new_char = tCharacters[s_map[i][0]]
        // if the letter is already used, return false due to restriction (No two characters may map to the same character)
        if (used_letters.includes(new_char)) return false
        else used_letters.push(new_char)
        // for each value in the s string, change it to the new character
        for (const value of s_map[i]) {
            // if the new character is not the same as the needed character, return false
            if (tCharacters[value] !== new_char) return false
        }
    }
    // if all the characters are the same, return true
    return true
}
