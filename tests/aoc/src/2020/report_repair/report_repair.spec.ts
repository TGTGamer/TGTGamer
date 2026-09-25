/*
 * Project: TGTGamer
 * File: report_repair.spec.ts
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

import { describe, expect, test } from "vitest"
import { get2, get3 } from "../../../../../packages/aoc/src/2020/report_repair/report_repair.js";
import { acc } from "../../../../../packages/aoc/src/2020/report_repair/values.js"

const accounts: number[] = [
    1721,
    979,
    366,
    299,
    675,
    1456
]

describe('get2', () => {
    test('should be the correct value (demo case)', () => {
        const values = get2(accounts)
        expect(values[0] * values[1]).toBe(514579)
    })

    test('should be the correct value', () => {
        const values = get2(acc)
        expect(values[0] + values[1]).toBe(2020)
    })
})

describe('get3', () => {
    test('should be the correct value (demo case)', () => {
        const values = get3(accounts)
        expect(values[0] * values[1] * values[2]).toBe(241861950)
    })


    test('should be the correct value ', () => {
        const values = get3(acc)
        expect(values[0] + values[1] + values[2]).toBe(2020)
    })
})