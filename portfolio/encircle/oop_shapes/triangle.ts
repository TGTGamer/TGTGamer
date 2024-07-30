export type Sides = {
    shape: "equilateral",
    1: number,
} | {
    shape: "isosceles",
    1: number,
    2: number,
    match: 1 | 2
} | {
    shape: "scalene",
    1: number,
    2: number,
    3: number
}

export class Triangle {

    protected perimeter: number
    protected area: number
    private one: number
    private two: number
    private three: number
    private shape: "equilateral" | "isosceles" | "scalene"

    constructor(
        private name: string,
        sides: Sides
    ) {
        this.shape = sides.shape
        this.calculateSides(sides).calculateArea().calculatePerimeter()
    }

    public get getSides() {
        return [
            this.one,
            this.two,
            this.three
        ]
    }

    public set setSides(sides: Sides) {
        this.calculateSides(sides)
    }

    public get getPerimeter() {
        return this.perimeter
    }

    public get getShape() {
        return this.shape
    }

    public get getArea() {
        return this.area
    }

    static from(
        name: string,
        sides: Sides = {
            shape: "equilateral",
            1: 1
        }
    ) {
        return new Triangle(name, sides)
    }

    public calculateArea() {
        this.area = (this.one * this.two) / 2
        return this // returns the object for piping
    }

    public calculatePerimeter() {
        this.perimeter = this.one + this.two + this.three
        return this // returns the object for piping
    }

    public toJson() {
        return {
            name: this.name,
            shape: this.shape,
            area: this.area,
            perimeter: this.perimeter,
            sides: [
                this.one,
                this.two,
                this.three
            ]
        }
    }

    private calculateSides(sides: Sides) {
        if (sides.shape === "equilateral") {
            this.one = sides[1]
            this.two = sides[1]
            this.three = sides[1]
        } else if (sides.shape === "isosceles") {
            this.one = sides[1]
            this.two = sides[2]
            this.three = sides[sides.match] // match the one specified in the input
        } else {
            this.one = sides[1]
            this.two = sides[2]
            this.three = sides[3]
        }
        return this
    }
}
