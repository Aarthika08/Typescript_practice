var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
// Abstract class cannot be instantiated directly
// const shape = new Shape(); // Error: Cannot create an instance of an abstract class.
// Instances of concrete classes
var circle = new Circle(5);
var rectangle = new Rectangle(4, 6);
console.log(circle.calculateArea()); // Output: ~78.54
console.log(rectangle.calculateArea()); // Output: 24
//   explanation
//   In this example:
//   Shape is an abstract class with an abstract method calculateArea(). This method must be implemented by any concrete subclass.
//   Circle and Rectangle are concrete classes that extend the Shape abstract class. They provide concrete implementations for the abstract method calculateArea().
//   You cannot create an instance of an abstract class directly (e.g., new Shape()). You need to create instances of its concrete subclasses.
//   Abstract classes are useful when you want to define a common interface for a group of related classes and enforce that certain methods must be implemented by all subclasses.
//   They help provide a level of abstraction and ensure a consistent structure across multiple classes.
