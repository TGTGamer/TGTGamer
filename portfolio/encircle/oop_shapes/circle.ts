export class Circle {
    private area: number
    private perimeter: number
    private diameter: number

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
        return this.radius
    }

    public get getPerimeter() {
        return this.perimeter
    }

    public get getArea() {
        return this.area
    }

    static from(
        name: string,
        radius: number = 1,
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
