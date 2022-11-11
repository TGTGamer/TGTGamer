/*
 * Project: TGTGamer
 * File: toboggan_trajectory.spec.ts
 * Path: \portfolio\aoc\2020\toboggan_trajectory\toboggan_trajectory.spec.ts
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

import * as tobogganTrajectory from './toboggan_trajectory';

const input = `.#..............##....#.#.####.
##..........#.....##...........
.......#....##...........#.#...
.........#.#...#..........#....
.........#..#................##
..#...#..#..#...........#......
...................#...##..##..
........#.....##...#.#.#...#...
#..#.##......#.#..#..........#.
......#.#...#.#...#........##.#
.....#.####........#...........
...###..#............#.........
.....#.......##......#...#.....
#......##......................
......#..............#.........
..##...#....###.##.............
#...#..........#.#.........#...
...........#........#...#......
.....##.........#......#..#....
#..............#....#.....#....
.#......#....#...#............#
.####..........##..#.#.........
....#...#......................
....................#....#.#...
..........###.#...............#
.#...........#...##............
.#.#..#.....#...#....#.......#.
.##........#..#....#...........
.........#.....#......###......
..............#..#.......#.....
........#..#.#...........#..#..
#.........#......#.....##.#.#..
........#.#.#....#.............
........#........#.#.##........
#......#.#..........#..#.......
..#....#...##......###..#..#...
............#..#.#.........#...
....#.#...........#..........##
.......#.#.#..#......#...#.....
..#.........##.#.........#...#.
......#....#.#....#........#.#.
.#....###....#..............#..
.#....#.......#....#..#.....#..
.....#.....#...................
..#.....#......#......#........
......##.##...#...#...#...#.##.
##...#....#...#..#...#...#.....
..#.....#...#...##.##...#......
.....#.............##...#......
.....................#.##..#...
#...#....#....#........#.....#.
..#...#.........#...#..#.....#.
#.#......#...................#.
..#...........##...............
..#....#........#..#...........
...........#...................
.............###......#....#...
...........#...#....#..#....#..
.....##............#.#.......#.
.....#..#....#...#....#........
...............##........#.#...
.........#...#.#....#.......#..
#..#.......#.......#...#.......
..#...........................#
......#.......#..#......#......
.#.......#..................##.
..#.........#..#.##.#....#...##
...#..#....#...#....#.#........
.#...#........##..#..#.......#.
.....#........#....#....#..#...
............#...........#......
..###.......#..#....#......#...
.....#...#.......#..#..........
..#........##.#....##..........
#....#.............#..##......#
....#.................##.......
...#.......#........#....##.#.#
##..##..#.....#.....#..........
...#...............#....#..#...
.#...##....#....#.....#....##..
...#.....#......#......#.......
#.....#.......##.....#..#....##
.....#.#...##.#......##....#.#.
..........#....#.#...#.........
.#..##...#.....................
...........##..#...#....#......
...#......#........#.......#...
.#......#..#........#.....#..#.
.......#........##..#.##....#..
.##..........#..#...#.....#....
.....##...............#.#......
..##.....#..#......#..##.#.#...
....#......#.##...........#....
#.#..#.......#......#.#........
...#.#..#....#............#..#.
...#..........###....#....#...#
........##...#.......#..#....#.
..#...#.....#..#........##.....
...#..#.##.#.#.##..............
.......#...#.........#.....#..#
..#.....#.#..........#..#......
......#..........#......#.....#
.#...........#........#......##
..##............#......#...#..#
#..................#...........
#....#..#.........#........#..#
..#.#....###..#...#...##...##..
...#....#..#.....#.............
.#........##.##...#....#...#...
.........#.......##.#.....##...
#.#.....##...#........#...#...#
.....#.#.##...#.....#.##..#....
........#...##...#...#.#..#..#.
.##....#.##...#.......#........
...#..#................#..#....
....#.......#......#...#.##....
#......###..#...#......#.......
..#...#...##...........##......
.......#...#..##....##......#..
....#.#.............#.#...##..#
..........#........#...#......#
............#.#.#....###.......
#..#...#.#.####...#..#...#.....
.##.......#.##...#.............
#..#...........#.#.##.......#..
...#..#.#...#...###..#.#..#.#..
..#...#.....#..#....#....#.....
.........##.......#............
.........##.##......###........
.............#.#....#..#.....#.
...#....#.#.......#......##....
............#..................
....##...#..........#...#..#...
#..#....#.....#.......#.##.#..#
.....#.........##.............#
#.....#.#...#............##..##
..............#....#.....#.....
.#....###..#.#.....###.#..#....
.....#....##...#....#......#...
..........#...#....#...........
............#....#..#.........#
..##.....#.#...#.......#...#...
...#...#..#......##...#.....##.
......#.##............##.#....#
....#......#...##.....#.....###
.#.###...............#...#.#...
..#....................##...#..
.......#.....##...........#....
#.........#....#....#....#....#
..#.#..##.#.#..................
.....#.......#................#
...........#.......#........#..
#...#.........#.#.....#.....#..
..........#..#...........#.....
#..#.##..##..#.#.##.........#..
#..#..#....##..#.........#.....
#.#.......................#.#..
.##......#.#...#......#....#...
..#.#................#..##.....
.......#..................#...#
.....#.........##.#....#.......
#..........#..#.#..........#..#
..#..#.....#.........#...#.....
..............#.....#..#...#.##
...............................
...#............##......#.....#
.......#..#.............#.#....
...........#..........#........
...#.####..#......#...#....#...
##......#.##.....#.............
....#.........#...#...........#
...#........#.......#.#..#.#.#.
..#.......#.........#....#.....
................#.#.#.##...#..#
#.##...#...#..#.....#.....#..#.
...............#...........#...
.....##.#...............##...#.
.#..##.##......................
.......#.........#..#..#.......
...#......#..................#.
...#.#..#....#....#............
...........#...#..#....##......
.....#...#..#.#....#....#....#.
.......#...#...#.#.#...........
....#......#......#...##..#....
##...#.#.....#..#.##...........
#.#..#.....#..#................
...#..#.#......#.#...........##
##....#...#.....###..#...#....#
...#.....#.#.#......##...#...#.
............#.......#..........
....#..........###.......#.....
.................##..##....#...
...........#........##..#......
...#.#...#.....#........#...#..
#...#.#......#.#...........#...
..#..........#....#..........#.
..#................#...........
#...#.#....#.#.......#.........
.#...........##..#....#....#..#
.##........#.....#...#..#....#.
......#......#...#.............
.......#..#...#.##....#..#.#...
.......#......#....#....#.#.#..
..........##.....#....##.#.....
.........##..#...#.....#..#....
...#....#..........#..#...#..#.
.......#.....##.#..#.....#...#.
#...#......#......#...#........
#..#....#.#......#......#......
.......#.##....................
...##...#.....#......##......#.
.#...................###.......
....#........###...#........#..
...#............#.....#..#.....
..................#......#....#
..##......#..##..##......#.#...
........##....##.......#...#...
.#.#....#.....#.....#....#....#
...##.#.............#....##....
.........#.....#...#......#....
..#.....#............#....##...
..##.....#.....##.##...........
#....#.#.......#..#......#.....
##.......#.....#.....####....#.
##...#.......#...#.....#.......
#.....#..##.##...##..#.....#..#
..........#......#..#.#........
..##.#......#..............#...
.#...#..........#.......#....#.
..#....##...#...........#....#.
..#.........#..#......#......#.
.##....#......#.#.........#..##
.......#...#....##............#
.##.................#.#........
...#.#...#..#..#.....#.#.......
.#.#.......#...................
..#..#.....#......#.....##..##.
.#........#.##......#..........
....##...#............#.#....#.
.......#.#..#....##.#....#....#
......####...#..#.....#........
..........#..#.........#.#..#.#
..........##.........#.##......
.##..#.#.....#.....#....#......
............#..#...............
.....##.........#...#...##...##
........#.##.#...#.....#....#.#
#......##.#.##..........##.....
#..#..#........#.........#..#..
...............#.#..##.........
.#.......##.#..#....#...#....##
.#..##.....##......#....#...#.#
........#...#.........#.....#.#
...........#............#...#..
................#...........#..
..............##........#....#.
..........#.....##.....#..#....
#......#....###..#..#..........
.....#.#.....##....#.#.......#.
...#...#...............#.#.....
.............#.......#.........
.....#.....#..#......#.....#...
.........#.................#.##
.#.....#.##..#.................
..#......#.......#.....#...#..#
..#..#.#.#...#.......#.##......
..........#..#.........#.......
.#..........#...#....#..#...##.
.#.#.#.###.....#...#.#.#.......
....##............#............
.#.#.............#..#......#.#.
.#.#..........##..#.....#..#.#.
...........#.##..#...#.#.....#.
...........#..#....#...........
..#................#.#...#....#
...............##........##....
....#.............#........#...
...#......#.#.#........#.......
#..............#..##.#..##.....
.#.#.###................##.....
.............#..#.........#....
.......##..#............#...#..
...#...#...........#.....#.....
........#......#.#.#......#..#.
#.##.......#......#..#..#.#....
...#........#...........#...#..
..#...........#.........#......
.............#....#....#.......
....#.........#........#......#
..#............##..#.........#.
.#...#...#..#...#........#..#..
...#....##..............#......
...........#...#....#.#.##..###
..#....#......#.........#..#...
.......#...#...................
.#...#.#...................#...
.#.....##.#.......#.#.#...##..#
.....#..#.#.........#...#..##..
.#..#.##.#......#......#.#...#.
......#..#....##..#....##....##
#...#......##........##........
.#.........###................#
.................#..###..#.#...
..#.#........#..#........#...#.
#.#....#....#..#...#.#......#..
.#.#.............###.........#.
.....#...............##...#...#
..............#...#........#..#
...................#..#.......#
#......................#.....#.
...#.........#..##...#...#.##..
.....#..........#.........#....
.....#...#............#..#.....
.............#............#....
...#.........#.................
#...........#.#...............#
.....#...#.....#..#.##.......##
...#....#.#...........#........
.........................#.#...
.#..#...........#.#........#...
.............#.#.....#..#....#.
.....#...#.###...#..#........#`
const levelDesign = input.split("\r\n")

it('should return the correct value', () => {
  expect(tobogganTrajectory.checkTrees(levelDesign, 3, 1)).not.toBeNaN();
});

it('should return the correct value', () => {
  expect(tobogganTrajectory.checkTrees(levelDesign, 3, 1)).toBe(193);
});

it('should return the correct value', () => {
  expect(tobogganTrajectory.checkTreesv2(levelDesign, 3, 1)).not.toBeNaN();
});
it('should return the correct value', () => {
  expect(tobogganTrajectory.checkTreesv2(levelDesign, 3, 1)).toBe(193);
});

it('should return the correct value', () => {
  expect(tobogganTrajectory.multiply([[1,1], [3,1], [5,1], [7,1], [1,2]], levelDesign)).not.toBeNaN();
});

it('should return the correct value', () => {
  expect(tobogganTrajectory.multiply([[1,1], [3,1], [5,1], [7,1], [1,2]], levelDesign)).toBe(1355323200);
});
