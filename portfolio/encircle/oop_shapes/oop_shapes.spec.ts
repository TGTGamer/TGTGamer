import {Circle} from './circle.js';
import {Square} from './square.js';
import {Sides, Triangle} from './triangle.js'

// Generated by CodiumAI

describe('Circle', () => {

    // Creating a Circle instance with valid name and radius initializes area, diameter, and perimeter correctly
    it('should initialize area, diameter, and perimeter correctly when created with valid name and radius', () => {
        // Given
        const circle = new Circle('TestCircle', 5);

        // When
        const area = circle.getArea;
        const diameter = circle.getDiameter;
        const perimeter = circle.getPerimeter;

        // Then
        expect(area).toBeCloseTo(78.54, 2); // ￏﾀ * 5^2
        expect(diameter).toBe(10); // 5 + 5
        expect(perimeter).toBeCloseTo(31.42, 2); // ￏﾀ * 10
    });

    // Setting a new radius updates area, diameter, and perimeter correctly
    it('should update area, diameter, and perimeter correctly when radius is set to a new value', () => {
        // Given
        const circle = new Circle('TestCircle', 5);

        // When
        circle.setRadius = 10;

        // Then
        expect(circle.getArea).toBeCloseTo(314.16, 2); // ￏﾀ * 10^2
        expect(circle.getDiameter).toBe(20); // 10 + 10
        expect(circle.getPerimeter).toBeCloseTo(62.83, 2); // ￏﾀ * 20
    });

    // Getting radius returns the correct radius value
    it('should return the correct radius value when getRadius is called', () => {
        // Given
        const circle = new Circle('TestCircle', 5);

        // When
        const radius = circle.getRadius;

        // Then
        expect(radius).toBe(5);
    });

    // Getting diameter returns the correct diameter value
    it('should return the correct diameter value when getDiameter is called', () => {
        // Given
        const circle = new Circle('TestCircle', 5);

        // When
        const diameter = circle.getDiameter;

        // Then
        expect(diameter).toBe(10);
    });

    // Getting perimeter returns the correct perimeter value
    it('should return the correct perimeter value when getPerimeter is called', () => {
        // Given
        const circle = new Circle('TestCircle', 5);

        // When
        const perimeter = circle.getPerimeter;

        // Then
        expect(perimeter).toBeCloseTo(31.42, 2);
    });

    // Getting area returns the correct area value
    it('should return the correct area value when getArea is called', () => {
        // Given
        const circle = new Circle('TestCircle', 5);

        // When
        const area = circle.getArea;

        // Then
        expect(area).toBeCloseTo(78.54, 2);
    });

    // Creating a Circle instance with radius set to zero
    it('should initialize correctly when created with radius set to zero', () => {
        // Given
        const circle = new Circle('TestCircle', 0);

        // When
        const area = circle.getArea;
        const diameter = circle.getDiameter;
        const perimeter = circle.getPerimeter;

        // Then
        expect(area).toBe(0);
        expect(diameter).toBe(0);
        expect(perimeter).toBe(0);
    });

    // Setting radius to zero after Circle instance creation
    it('should update correctly when radius is set to zero after creation', () => {
        // Given
        const circle = new Circle('TestCircle', 5);

        // When
        circle.setRadius = 0;

        // Then
        expect(circle.getArea).toBe(0);
        expect(circle.getDiameter).toBe(0);
        expect(circle.getPerimeter).toBe(0);
    });

    // Creating a Circle instance with negative radius
    it('should handle negative radius correctly when created with negative radius', () => {
        // Given
        const circle = new Circle('TestCircle', -5);

        // When
        const area = circle.getArea;
        const diameter = circle.getDiameter;
        const perimeter = circle.getPerimeter;

        // Then
        expect(area).toBeCloseTo(78.54, 2); // ￏﾀ * (-5)^2
        expect(diameter).toBe(-10); // -5 + -5
        expect(perimeter).toBeCloseTo(-31.42, 2); // ￏﾀ * -10
    });

    // Setting radius to a negative value after Circle instance creation
    it('should handle negative radius correctly when radius is set to a negative value after creation', () => {
        // Given
        const circle = new Circle('TestCircle', 5);

        // When
        circle.setRadius = -10;

        // Then
        expect(circle.getArea).toBeCloseTo(314.16, 2); // ￏﾀ * (-10)^2
        expect(circle.getDiameter).toBe(-20); // -10 + -10
        expect(circle.getPerimeter).toBeCloseTo(-62.83, 2); // ￏﾀ * -20
    });

    // Creating a Circle instance with extremely large radius
    it('should handle extremely large radius correctly when created with extremely large radius', () => {
        // Given
        const largeRadius = Number.MAX_SAFE_INTEGER;
        const circle = new Circle('TestCircle', largeRadius);

        // When
        const area = circle.getArea;
        const diameter = circle.getDiameter;
        const perimeter = circle.getPerimeter;

        // Then
        expect(area).toBeCloseTo(Math.PI * (largeRadius * largeRadius), 2);
        expect(diameter).toBe(largeRadius + largeRadius);
        expect(perimeter).toBeCloseTo(Math.PI * (largeRadius + largeRadius), 2);
    });
});

// Generated by CodiumAI

describe('Square', () => {

    // Creating a Square instance with valid dimensions initializes area and perimeter correctly
    it('should initialize area and perimeter correctly when created with valid dimensions', () => {
        // Given
        const square = new Square('TestSquare', 4, 5);

        // When
        const area = square.getArea;
        const perimeter = square.getPerimeter;

        // Then
        expect(area).toBe(20); // 4 * 5
        expect(perimeter).toBe(18); // 2*(4+5)
    });

    // Setting width updates the area and perimeter correctly
    it('should update area and perimeter correctly when width is set', () => {
        // Given
        const square = new Square('TestSquare', 4, 5);

        // When
        square.setWidth = 6;
        const area = square.getArea;
        const perimeter = square.getPerimeter;

        // Then
        expect(area).toBe(30); // 6 * 5
        expect(perimeter).toBe(22); // 2*(6+5)
    });

    // Setting height updates the area and perimeter correctly
    it('should update area and perimeter correctly when height is set', () => {
        // Given
        const square = new Square('TestSquare', 4, 5);

        // When
        square.setHeight = 7;
        const area = square.getArea;
        const perimeter = square.getPerimeter;

        // Then
        expect(area).toBe(28); // 4 * 7
        expect(perimeter).toBe(22); // 2*(4+7)
    });

    // Getting width returns the correct value
    it('should return correct width when getWidth is called', () => {
        // Given
        const square = new Square('TestSquare', 4, 5);

        // When
        const width = square.getWidth;

        // Then
        expect(width).toBe(4);
    });

    // Getting height returns the correct value
    it('should return correct height when getHeight is called', () => {
        // Given
        const square = new Square('TestSquare', 4, 5);

        // When
        const height = square.getHeight;

        // Then
        expect(height).toBe(5);
    });

    // Getting perimeter returns the correct value
    it('should return correct perimeter when getPerimeter is called', () => {
        // Given
        const square = new Square('TestSquare', 4, 5);

        // When
        const perimeter = square.getPerimeter;

        // Then
        expect(perimeter).toBe(18); // 2*(4+5)
    });

    // Creating a Square instance with zero dimensions
    it('should initialize area and perimeter as zero when created with zero dimensions', () => {
        // Given
        const square = new Square('TestSquare', 0, 0);

        // When
        const area = square.getArea;
        const perimeter = square.getPerimeter;

        // Then
        expect(area).toBe(0); // 0 * 0
        expect(perimeter).toBe(0); // 2*(0+0)
    });

    // Creating a Square instance with negative dimensions
    it('should initialize area and perimeter correctly when created with negative dimensions', () => {
        // Given
        const square = new Square('TestSquare', -4, -5);

        // When
        const area = square.getArea;
        const perimeter = square.getPerimeter;

        // Then
        expect(area).toBe(20); // -4 * -5 (area is positive)
        expect(perimeter).toBe(-18); // 2*(-4+-5) (perimeter is negative)
    });

    // Setting width to zero
    it('should update area and perimeter correctly when width is set to zero', () => {
        // Given
        const square = new Square('TestSquare', 4, 5);

        // When
        square.setWidth = 0;
        const area = square.getArea;
        const perimeter = square.getPerimeter;

        // Then
        expect(area).toBe(0); // 0 * 5
        expect(perimeter).toBe(10); // 2*(0+5)
    });

    // Setting height to zero
    it('should update area and perimeter correctly when height is set to zero', () => {
        // Given
        const square = new Square('TestSquare', 4, 5);

        // When
        square.setHeight = 0;
        const area = square.getArea;
        const perimeter = square.getPerimeter;

        // Then
        expect(area).toBe(0); // 4 * 0
        expect(perimeter).toBe(8); // 2*(4+0)
    });
});

// Generated by CodiumAI

describe('Triangle', () => {

    // Creating an equilateral triangle with valid sides
    it('should create an equilateral triangle when given valid sides', () => {
        // Given
        const sides: Sides = {shape: "equilateral", 1: 3};

        // When
        const triangle = new Triangle("Equilateral", sides);

        // Then
        expect(triangle.getShape).toBe("equilateral");
        expect(triangle.getSides).toEqual([3, 3, 3]);
    });

    // Creating an isosceles triangle with valid sides
    it('should create an isosceles triangle when given valid sides', () => {
        // Given
        const sides: Sides = {shape: "isosceles", 1: 3, 2: 4, match: 1};

        // When
        const triangle = new Triangle("Isosceles", sides);

        // Then
        expect(triangle.getShape).toBe("isosceles");
        expect(triangle.getSides).toEqual([3, 4, 3]);
    });

    // Creating a scalene triangle with valid sides
    it('should create a scalene triangle when given valid sides', () => {
        // Given
        const sides: Sides = {shape: "scalene", 1: 3, 2: 4, 3: 5};

        // When
        const triangle = new Triangle("Scalene", sides);

        // Then
        expect(triangle.getShape).toBe("scalene");
        expect(triangle.getSides).toEqual([3, 4, 5]);
    });

    // Calculating the area of an equilateral triangle
    it('should calculate the area of an equilateral triangle correctly', () => {
        // Given
        const sides: Sides = {shape: "equilateral", 1: 4};

        // When
        const triangle = new Triangle("Equilateral", sides);

        // Then
        expect(triangle.getArea).toBe(8);
    });

    // Calculating the perimeter of an equilateral triangle
    it('should calculate the perimeter of an equilateral triangle correctly', () => {
        // Given
        const sides: Sides = {shape: "equilateral", 1: 4};

        // When
        const triangle = new Triangle("Equilateral", sides);

        // Then
        expect(triangle.getPerimeter).toBe(12);
    });

    // Calculating the area of an isosceles triangle
    it('should calculate the area of an isosceles triangle correctly', () => {
        // Given
        const sides: Sides = {shape: "isosceles", 1: 4, 2: 5, match: 1};

        // When
        const triangle = new Triangle("Isosceles", sides);

        // Then
        expect(triangle.getArea).toBe(10);
    });

    // Creating a triangle with zero-length sides
    it('should handle zero-length sides appropriately', () => {
        // Given
        const sides: Sides = {shape: "scalene", 1: 0, 2: 0, 3: 0};

        // When
        const triangle = new Triangle("ZeroSides", sides);

        // Then
        expect(triangle.getSides).toEqual([0, 0, 0]);
        expect(triangle.getArea).toBe(0);
        expect(triangle.getPerimeter).toBe(0);
    });

    // Creating a triangle with negative-length sides
    it('should handle negative-length sides appropriately', () => {
        // Given
        const sides: Sides = {shape: "scalene", 1: -3, 2: -4, 3: -5};

        // When
        const triangle = new Triangle("NegativeSides", sides);

        // Then
        expect(triangle.getSides).toEqual([-3, -4, -5]);
        expect(triangle.getArea).toBe(6); // Area calculation might be incorrect due to negative values.
        expect(triangle.getPerimeter).toBe(-12);
    });

    // Creating an isosceles triangle with mismatched sides
    it('should handle mismatched isosceles sides appropriately', () => {
        // Given
        const sides: Sides = {shape: "isosceles", 1: 3, 2: 4, match: 2};

        // When
        const triangle = new Triangle("MismatchedIsosceles", sides);

        // Then
        expect(triangle.getSides).toEqual([3, 4, 4]);
    });

    // Creating a scalene triangle with one side longer than the sum of the other two
    it('should handle invalid scalene side lengths appropriately', () => {
        // Given
        const sides: Sides = {shape: "scalene", 1: 10, 2: 2, 3: 2};

        // When
        const triangle = new Triangle("InvalidScalene", sides);

        // Then
        expect(triangle.getSides).toEqual([10, 2, 2]);
        expect(triangle.getPerimeter).toBe(14);
    });

    // Setting new sides for an existing triangle and recalculating properties
    it('should set new sides and recalculate properties correctly', () => {
        // Given
        const initialSides: Sides = {shape: "equilateral", 1: 3};
        const newSides: Sides = {shape: "scalene", 1: 4, 2: 5, 3: 6};

        // When
        const triangle = new Triangle("InitialTriangle", initialSides);
        triangle.setSides = newSides;

        // Then
        expect(triangle.getShape).toBe("scalene");
        expect(triangle.getSides).toEqual([4, 5, 6]);
        expect(triangle.getPerimeter).toBe(15);
    });

    // Calculating the perimeter of an isosceles triangle
    it('should calculate the perimeter of an isosceles triangle correctly', () => {
        // Given
        const sides: Sides = {shape: "isosceles", 1: 4, 2: 5, match: 1};

        // When
        const triangle = new Triangle("Isosceles", sides);

        // Then
        expect(triangle.getPerimeter).toBe(12);
    });
});