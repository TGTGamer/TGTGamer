/*
 * Project: TGTGamer
 * File: toboggan_trajectory.spec.ts
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
import { valuesSplit } from "../../../../../packages/aoc/src/2020/toboggan_trajectory/input.js";
import * as tobogganTrajectory from "../../../../../packages/aoc/src/2020/toboggan_trajectory/toboggan_trajectory.js";

describe('checkTrees', () => {
  it('should be a number', () => {
    expect(tobogganTrajectory.checkTrees(valuesSplit, 3, 1)).not.toBeNaN();
  });

  it('should be correct value', () => {
    expect(tobogganTrajectory.checkTrees(valuesSplit, 3, 1)).toBe(193);
  });
})

describe('checkTreesv2', () => {
  it('should be a number', () => {
    expect(tobogganTrajectory.checkTreesv2(valuesSplit, 3, 1)).not.toBeNaN();
  });
  it('should be correct value', () => {
    expect(tobogganTrajectory.checkTreesv2(valuesSplit, 3, 1)).toBe(193);
  });
})

describe('multiply', () => {
  it('should be a number', () => {
    expect(tobogganTrajectory.multiply([[1,1], [3,1], [5,1], [7,1], [1,2]], valuesSplit)).not.toBeNaN();
  });

  it('should be correct value', () => {
    expect(tobogganTrajectory.multiply([[1,1], [3,1], [5,1], [7,1], [1,2]], valuesSplit)).toBe(1355323200);
  });
})
