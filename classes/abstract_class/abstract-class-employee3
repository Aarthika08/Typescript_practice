
abstract class Shape {
    abstract calculateArea(): number; // Abstract method without implementation
  }
  
  class Circle extends Shape {
    radius: number;
  
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
  
    calculateArea(): number {
      return Math.PI * this.radius ** 2;
    }
  }
  
  class Rectangle extends Shape {
    width: number;
    height: number;
  
    constructor(width: number, height: number) {
      super();
      this.width = width;
      this.height = height;
    }
  
    calculateArea(): number {
      return this.width * this.height;
    }
  }
  
  // Abstract class cannot be instantiated directly
  // const shape = new Shape(); // Error: Cannot create an instance of an abstract class.
  
  // Instances of concrete classes
  const circle = new Circle(5);
  const rectangle = new Rectangle(4, 6);
  
  console.log(circle.calculateArea()); // Output: ~78.54
  console.log(rectangle.calculateArea()); // Output: 24
  
  
//   explanation
//   In this example:
  
//   Shape is an abstract class with an abstract method calculateArea(). This method must be implemented by any concrete subclass.
//   Circle and Rectangle are concrete classes that extend the Shape abstract class. They provide concrete implementations for the abstract method calculateArea().
//   You cannot create an instance of an abstract class directly (e.g., new Shape()). You need to create instances of its concrete subclasses.
//   Abstract classes are useful when you want to define a common interface for a group of related classes and enforce that certain methods must be implemented by all subclasses.
//   They help provide a level of abstraction and ensure a consistent structure across multiple classes.
  
