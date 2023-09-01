class Shape {
    perimeter() {
        return 0;
    }

    area() {
        return 0;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    perimeter() {
        return (this.width + this.height) * 2;
    }

    area() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

const rect = new Rectangle(10, 5);
const circle = new Circle(6);

function compute(shape) {
    console.log(`${shape.constructor.name} perimeter: ${shape.perimeter()} area: ${shape.area()}`);
}

/*compute(rect);
compute(circle)*/;































/*
class Shape {
    perimeter() {
        return 0;
    }

    area() {
        return 0;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    perimeter() {
        return (this.width + this.height) * 2;
    }

    area() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(r) {
        super();
        this.r = r;
    }

    perimeter() {
        return 2 * Math.PI * this.r;
    }

    area() {
        return Math.PI * Math.pow(this.r, 2);
    }
}

function compute(shape) {
    console.log(`${shape.constructor.name} perimeter: ${shape.perimeter()} area: ${shape.area()}`);
}

const rect = new Rectangle(10, 5);
const circle = new Circle(6);

*/
