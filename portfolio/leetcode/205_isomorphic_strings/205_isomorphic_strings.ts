/**
 * @format
 * -----
 * Project: TGTGamer
 * File: 205_isomorphic_strings.ts
 * Path: \portfolio\LeetCode\205_isomorphic_strings\205_isomorphic_strings.ts
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


export function IsomorphicStrings(s: string, t: string): boolean {
  const s_map: { [index: string]: number[] } = {}
    // Create a map of the first string and thier indices
    for (let i in [...s]) {
        // get the letter from the string
        let letter = s[i]
        // if the letter is not in the array, add it
        if (!s_map[letter]) s_map[letter] = [Number(i)]
        // if the letter is in the array, add the index to the array
        else s_map[letter].push(Number(i))
    }
    // Create an array to store used characters for restriction (No two characters may map to the same character)
    let used_letters: string[] = []

    // Test the second string against the map
    for (let i in s_map) {
        // get the replacement letter
        let new_char = t[s_map[i][0]]
        // if the letter is already used, return false due to restriction (No two characters may map to the same character)
        if (used_letters.includes(new_char)) return false
        else used_letters.push(new_char)
        // for each value in the s string, change it to the new character
        for (let value of s_map[i]) {
            // if the new character is not the same as the needed character, return false
            if (t[value] !== new_char) return false
        }
    }
    // if all the characters are the same, return true
    return true
}
