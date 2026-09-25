/*
 * Project: TGTGamer
 * File: json_to_csv.ts
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

import type {obj} from "../data_manipulation/data_manipulation.js"
import fs from "node:fs"
import { fileURLToPath } from "node:url"

const headers = [
    "Date",
    "Brand",
    "Pattern",
    "Tyre Size",
    "Season",
    "Class",
    "Rolling Resistance",
    "Wet Rating",
    "Noise Rating",
    "Price (£)"
]

export function jsonToCsv(json: obj[]) {
    const jsonMapped = json.map(value => {
        const line = [
            new Date().toDateString(),
            value.manufacturer, // think this is the brand?
            value.pattern,
            value.width,
            value.winter ? "Winter" : "Summer",
            value.tyre_class,
            value.rolling_resistance,
            value.wet_grip,
            value.noise_rating,
            value.price
        ]
        return line.join(", ")
    })

    return writeCSV(jsonMapped)
}

function writeCSV(json: string[]) {
    const headerString = headers.join(", ")
    const lines = json.join("\n") // adds new lines between each line
    const content = headerString + "\n" + lines
    fs.writeFileSync(
        // Next to this module, not relative to wherever the process was started
        fileURLToPath(new URL("./output.csv", import.meta.url)),
        content
    )
    return content
}
