/*
 * Project: TGTGamer
 * File: json_to_csv.spec.ts
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

import { afterAll, beforeAll, expect, it, vi } from "vitest"
import fs from "node:fs"
import {jsonToCsv} from "../../../../packages/encircle/src/json_to_csv/json_to_csv.js";
import json from "../../fixtures/task_2_and_3.json" with { type: "json" }

const expected = `Date, Brand, Pattern, Tyre Size, Season, Class, Rolling Resistance, Wet Rating, Noise Rating, Price (£)
Tue Jul 30 2024, Uniroyal, RainSport 3, 205, Winter, C1, E, A, 2, 93.93
Tue Jul 30 2024, Dexel, Premium Choice, 205, Winter, C1, C, A, 1, 79.71
Tue Jul 30 2024, Pirelli, P7, 205, Winter, C1, C, B, 2, 97.96
Tue Jul 30 2024, Economy, , 205, Winter, C1, G, F, 3, 54.04
Tue Jul 30 2024, Continental, PremiumContact 5, 205, Winter, C1, C, A, 2, 97.32
Tue Jul 30 2024, Economy, , 205, Winter, C1, G, F, 3, 54.04
Tue Jul 30 2024, Continental, PremiumContact 5, 205, Winter, C1, C, B, 2, 98.17
Tue Jul 30 2024, Dunlop, SP Sport BluResponse, 205, Winter, C1, B, A, 1, 90.49
Tue Jul 30 2024, Pirelli, Cinturato P7, 205, Winter, C1, E, B, 2, 96.49
Tue Jul 30 2024, Continental, EcoContact 6, 205, Winter, C1, B, B, 2, 106.47
Tue Jul 30 2024, Michelin, Primacy 3, 205, Winter, C1, E, A, 2, 104.84
Tue Jul 30 2024, Bridgestone, Turanza ER300, 205, Winter, C1, E, B, 2, 94.64
Tue Jul 30 2024, Continental, EcoContact 5, 205, Winter, C1, B, B, 2, 112.86
Tue Jul 30 2024, Economy, , 205, Winter, , E, C, 2, 74.94
Tue Jul 30 2024, Michelin, Primacy 3, 205, Winter, C1, C, A, 2, 96.93
Tue Jul 30 2024, Michelin, Primacy 4, 205, Winter, C1, A, B, 1, 112.14
Tue Jul 30 2024, Uniroyal, RainSport 3, 205, Winter, C1, C, A, 2, 84.91
Tue Jul 30 2024, Bridgestone, Turanza ER300, 205, Winter, C1, E, B, 2, 94.64
Tue Jul 30 2024, Uniroyal, RainSport 5, 205, Winter, C1, C, A, 2, 79.20
Tue Jul 30 2024, Uniroyal, RainSport 5, 205, Winter, C1, C, A, 2, 80.76
Tue Jul 30 2024, Goodyear, EfficientGrip Performance, 205, Winter, C1, B, A, 1, 87.46
Tue Jul 30 2024, Continental, EcoContact 6, 205, Winter, C1, A, A, 2, 96.73
Tue Jul 30 2024, Uniroyal, RainSport 5, 205, Winter, C1, C, A, 2, 74.66
Tue Jul 30 2024, Michelin, Primacy 4, 205, Winter, C1, A, B, 2, 101.35
Tue Jul 30 2024, Continental, SportContact 2, 205, Winter, C1, E, C, 2, 96.73
Tue Jul 30 2024, Michelin, Primacy 3, 205, Winter, C1, E, A, 2, 107.19
Tue Jul 30 2024, Uniroyal, RainSport 5, 205, Winter, C1, C, A, 2, 74.31
Tue Jul 30 2024, Economy, , 205, Winter, C1, G, F, 3, 55.16
Tue Jul 30 2024, Goodyear, EfficientGrip Performance, 205, Winter, C1, B, A, 1, 83.97
Tue Jul 30 2024, , , 205, Winter, C1, B, A, 1, 99.10
Tue Jul 30 2024, Continental, PremiumContact, 205, Winter, C1, F, C, 1, 116.68
Tue Jul 30 2024, Hankook, Ventus Prime 3 (K125), 205, Winter, C1, C, A, 2, 81.24
Tue Jul 30 2024, Continental, PremiumContact 6, 205, Winter, C1, C, A, 2, 96.73
Tue Jul 30 2024, Continental, EcoContact 6, 205, Winter, C1, B, B, 2, 112.62
Tue Jul 30 2024, Hankook, Ventus Prime 3 (K125), 205, Winter, C1, F, C, 2, 103.58
Tue Jul 30 2024, , , 205, Winter, C1, B, A, 2, 84.56
Tue Jul 30 2024, Continental, EcoContact 5, 205, Winter, C1, B, B, 2, 96.73
Tue Jul 30 2024, Goodyear, EfficientGrip Performance, 205, Winter, C1, B, A, 1, 84.56
Tue Jul 30 2024, , , 205, Winter, , , , 0, 147.80
Tue Jul 30 2024, Continental, eContact (Hybrid cars), 205, Winter, C1, A, B, 2, 113.78
Tue Jul 30 2024, Dexel, Premium Choice, 205, Winter, C1, C, A, 1, 81.56
Tue Jul 30 2024, , , 205, Winter, , , , 0, 118.82
Tue Jul 30 2024, Continental, EcoContact 5, 205, Winter, C1, A, B, 2, 96.73
Tue Jul 30 2024, Continental, EcoContact 5, 205, Winter, C1, B, B, 2, 97.32
Tue Jul 30 2024, Continental, PremiumContact 6, 205, Winter, C1, C, A, 2, 97.32
Tue Jul 30 2024, Hankook, Ventus Prime 3 (K125), 205, Winter, C1, C, A, 2, 81.04
Tue Jul 30 2024, Continental, EcoContact 5, 205, Winter, C1, B, B, 2, 96.73
Tue Jul 30 2024, Pirelli, Cinturato P7, 205, Winter, C1, C, B, 2, 83.89
Tue Jul 30 2024, Continental, EcoContact 5, 205, Winter, C1, C, B, 2, 98.17
Tue Jul 30 2024, Michelin, Primacy 4, 205, Winter, C1, A, B, 1, 97.75
Tue Jul 30 2024, Michelin, Energy Saver, 205, Winter, C1, B, A, 2, 99.16
Tue Jul 30 2024, Michelin, Primacy 4, 205, Winter, C1, A, A, 2, 97.75
Tue Jul 30 2024, , , 205, Winter, , , , 0, 129.67
Tue Jul 30 2024, , , 205, Winter, , , , 0, 119.07
Tue Jul 30 2024, Continental, EcoContact 6, 205, Winter, C1, A, A, 2, 97.32
Tue Jul 30 2024, Continental, EcoContact 6, 205, Winter, C1, B, B, 2, 118.56
Tue Jul 30 2024, Michelin, Primacy 4, 205, Winter, C1, A, B, 1, 109.95
Tue Jul 30 2024, Michelin, Cross Climate +, 205, Winter, C1, C, B, 1, 106.04
Tue Jul 30 2024, Continental, EcoContact 6, 205, Winter, C1, B, B, 2, 105.37
Tue Jul 30 2024, Michelin, Primacy 3, 205, Winter, C1, E, A, 2, 103.94
Tue Jul 30 2024, , , 205, Winter, C1, C, A, 2, 94.95
Tue Jul 30 2024, Continental, EcoContact 6, 205, Winter, C1, A, B, 2, 98.17
Tue Jul 30 2024, Dunlop, SportMaxx RT, 205, Winter, C1, E, A, 1, 90.49
Tue Jul 30 2024, Bridgestone, Turanza T005, 205, Winter, C1, C, B, 2, 95.80
Tue Jul 30 2024, Vredestein, Snowtrac 5, 205, Winter, C1, E, E, 1, 107.14`

// The expected rows carry the date the fixture was captured; pin the clock to
// it so the test checks the conversion rather than today's date.
beforeAll(() => {
    vi.useFakeTimers({ toFake: ["Date"] })
    vi.setSystemTime(new Date(2024, 6, 30, 12))
})
afterAll(() => {
    vi.useRealTimers()
})

it('renders with the correct text', () => {
    expect(jsonToCsv(json)).toEqual(expected);
});

it('quotes delimiters, quotes and line breaks while preserving empty fields', () => {
    const row = { ...json[0], manufacturer: 'Brand, Inc.', pattern: 'A "quote"\r\nnext' }
    const write = vi.spyOn(fs, 'writeFileSync').mockImplementation(() => undefined)
    try {
        expect(jsonToCsv([row])).toContain(
            'Tue Jul 30 2024, "Brand, Inc.", "A ""quote""\r\nnext", 205, Winter'
        )
    } finally {
        write.mockRestore()
    }
})
