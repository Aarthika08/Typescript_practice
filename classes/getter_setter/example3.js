var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (newAge) {
            if (newAge <= 0 || newAge > 100) {
                throw new Error("Invalid age");
            }
            this._age = newAge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (newFirstName) {
            if (!newFirstName) {
                throw new Error("Invalid first name");
            }
            this._firstName = newFirstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (newLastName) {
            if (!newLastName) {
                throw new Error("Invalid last name");
            }
            this._lastName = newLastName;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.getFullName = function () {
        return "".concat(this._firstName, " ").concat(this._lastName);
    };
    return Person;
}());
var person = new Person();
person.age = 10;
person.firstName = 'aaa';
person.lastName = 'bbb';
console.log(person.age); // Output: 10
console.log(person.firstName); // Output: aaa
console.log(person.lastName); // Output: bbb
console.log(person.getFullName()); // Output: aaa bbb
