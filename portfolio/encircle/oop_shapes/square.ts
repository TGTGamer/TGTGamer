export class Square {

    protected perimeter: number
    protected area: number

    constructor(
        private name: string,
        private width: number,
        private height: number,
    ) {
        this.calculateArea().calculatePerimeter()
    }

    public get getWidth() {
        return this.width
    }

    public get getHeight() {
        return this.height
    }

    public get getPerimeter() {
        return this.perimeter
    }

    public get getArea() {
        return this.area
    }

    public set setWidth(value: number) {
        this.width = value
        this.calculateArea().calculatePerimeter()
    }

    public set setHeight(value: number) {
        this.height = value
        this.calculateArea().calculatePerimeter()
    }

    static from(
        name: string,
        width: number = 1,
        height: number = 1,
    ) {
        return new Square(name, width, height)
    }

    public calculateArea() {
        this.area = this.height * this.width
        return this // returns the object for piping
    }

    public calculatePerimeter() {
        const heightPer = this.height * 2
        const widthPer = this.width * 2

        this.perimeter = heightPer + widthPer
        return this // returns the object for piping
    }

    public toJson() {
        return {
            name: this.name,
            width: this.width,
            height: this.height,
            area: this.area,
            perimeter: this.perimeter
        }
    }
}
