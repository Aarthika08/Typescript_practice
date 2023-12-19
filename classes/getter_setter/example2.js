var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this.ageValue;
        },
        set: function (newAge) {
            if (newAge <= 0 || newAge > 100) {
                throw new Error("Invalid age");
            }
            this.ageValue = newAge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this.firstNameValue;
        },
        set: function (newFirstName) {
            if (!newFirstName) {
                throw new Error("Invalid first name");
            }
            this.firstNameValue = newFirstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this.lastNameValue;
        },
        set: function (newLastName) {
            if (!newLastName) {
                throw new Error("Invalid last name");
            }
            this.lastNameValue = newLastName;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.getFullName = function () {
        return "".concat(this.firstNameValue, " ").concat(this.lastNameValue);
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
