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
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return "".concat(this._firstName, " ").concat(this._lastName);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "firstName", {
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
        set: function (newLastName) {
            if (!newLastName) {
                throw new Error("Invalid last name");
            }
            this._lastName = newLastName;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person = new Person();
person.age = 10;
person.firstName = 'aaa';
person.lastName = 'bbb';
console.log(person.age); // Output: 10
console.log(person.fullName); // Output: aaa bbb
