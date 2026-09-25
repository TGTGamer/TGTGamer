/*
 * Project: TGTGamer
 * File: data_manipulation.ts
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

export type obj = {
    "id": string | number,
    "ManufacturerID": string | number,
    "width": string | number,
    "profile": string | number,
    "rim": string | number,
    "speed": string,
    "load": string | number,
    "description": string,
    "part_no": string,
    // The source feed sends null for the nullable fields when a value is unknown
    "pattern": string | null,
    "manufacturer": string | null,
    "extra_load": string,
    "run_flat": string,
    "winter": string | number,
    "summer": string | number,
    "OEList": string,
    "price": string | number,
    "tyre_class": string,
    "rolling_resistance": string,
    "wet_grip": string,
    "Graphic": string,
    "noise_db": string | number,
    "noise_rating": string | number,
    "info": string | null,
    "pattern_name": string | null,
    "recommended": string | number,
    "rating": string | number
}

export function expensive(json: Partial<obj>[]) {
    const sorted = jsonSort(json)
    // Invalid prices sort last, so the most expensive is the last valid one
    const valid = sorted.filter(value => priceKey(value.price) !== Infinity)
    return (valid.length > 0 ? valid : sorted).pop()
}

export function cheapest(json: Partial<obj>[]) {
    return jsonSort(json).shift()
}

export function bySpeed(json: Partial<obj>[], speed: string) {
    const jsonFiltered = json.filter(value => value.speed == speed)
    return jsonSort(jsonFiltered)
}

export function byManufacturer(json: Partial<obj>[], name: string) {
    const jsonFiltered = json.filter(value => value.manufacturer == name)
    return averagePrice(jsonFiltered)
}

export function byMetricSorted(json: Partial<obj>[], filter: string, sortValue: string) {
    const jsonFiltered = json.filter(value => {
        // filter is any field name, including ones obj does not declare
        const record: Record<string, unknown> = value
        return record[filter] == sortValue
    })
    return jsonSort(jsonFiltered)
}

export function byMetricAveraged(json: Partial<obj>[], filter: string, sortValue: string) {
    const jsonFiltered = json.filter(value => {
        // filter is any field name, including ones obj does not declare
        const record: Record<string, unknown> = value
        return record[filter] == sortValue
    })
    return averagePrice(jsonFiltered)
}

export function averagePrice(json: Partial<obj>[]) {
    let totalPrice = 0
    let validPrices = 0
    json.forEach(value => {
        const price = value.price
        if (typeof price !== "number" && typeof price !== "string") return
        if (typeof price === "string" && price.trim() === "") return
        const numericPrice = Number(price)
        if (!Number.isFinite(numericPrice)) return
        totalPrice += numericPrice
        validPrices++
    })

    // An average is undefined without prices; preserve the numeric NaN result.
    return validPrices === 0 ? NaN : totalPrice / validPrices
}

/**
 * Sort key for a price. Missing, null and non-numeric prices sort last:
 * `Number(null)` is 0 and `Number("abc")` is NaN, and a comparator that
 * returns NaN leaves the order undefined.
 */
function priceKey(price: Partial<obj>["price"] | null): number {
    if (price === undefined || price === null || price === "") return Infinity
    const value = Number(price)
    return Number.isNaN(value) ? Infinity : value
}

export function jsonSort(json: Partial<obj>[]) {
    return json.sort((a, b) => {
        const left = priceKey(a.price)
        const right = priceKey(b.price)
        // Infinity - Infinity is NaN, so equal keys compare explicitly
        return left === right ? 0 : left - right
    }).map(value => {
        return {
            price: value.price,
            name: value.description,
        }
    })
}
