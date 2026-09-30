/*
 * Project: TGTGamer
 * File: circle.ts
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

export class Circle {
    private area!: number
    private perimeter!: number
    private diameter!: number

    constructor(
        private name: string,
        private radius: number
    ) {
        this.calculateArea().calculateDiameter().calculatePerimeter()
    }

    public set setRadius(value: number) {
        this.radius = value
        this.calculateArea().calculateDiameter().calculatePerimeter()
    }

    public get getRadius() {
        return this.radius
    }

    public get getDiameter() {
        return this.diameter
    }

    public get getPerimeter() {
        return this.perimeter
    }

    public get getArea() {
        return this.area
    }

    static from(
        name: string,
        radius = 1,
    ) {
        return new Circle(name, radius)
    }

    public calculateArea() {
        this.area = Math.PI * (this.radius * this.radius)
        return this
    }

    public calculateDiameter() {
        this.diameter = this.radius + this.radius
        return this
    }

    public calculatePerimeter() {
        this.perimeter = Math.PI * this.diameter
        return this
    }

    public toJson() {
        return {
            name: this.name,
            radius: this.radius,
            diameter: this.diameter,
            area: this.area,
            perimeter: this.perimeter
        }
    }
}
