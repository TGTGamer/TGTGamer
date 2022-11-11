/*
 * Project: TGTGamer
 * File: toboggan_trajectory.ts
 * Path: \portfolio\aoc\2020\toboggan_trajectory\toboggan_trajectory.ts
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

export function checkTrees(levels: string[], right: number, down: number) {
    let location = 0
    let trees = 0
    for (let level = 0; level < levels.length; level = level + down) {
        const map = levels[level].trim()
        if (location >= map.length) location = location % map.length
        if (map[location] == "#") trees++
        location = location + right
    }
    return trees
}
export function checkTreesv2(levels: string[], right: number, down: number) {
    let location = 0
    let trees = 0
    for (let level = 0; level < levels.length; level = level + down) {
        let map = levels[level].trim()
        while (location > map.length) map = map+map
        if (map[location] == "#") trees++
        location = location + right
    }
    return trees
}

export function multiply(input: number[][], levelDesign: string[]) {
    let returnable: number = 0
    input.forEach(route => {
        const trees = checkTrees(levelDesign, route[0], route[1])
        if (returnable == 0) returnable = trees
        else returnable = returnable*trees
    })
    return returnable
}