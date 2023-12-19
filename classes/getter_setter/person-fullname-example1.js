var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this.ageValue;
        },
        set: function (newAge) {
            this.validateAge(newAge);
            this.ageValue = newAge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return "".concat(this.firstNameValue, " ").concat(this.lastNameValue);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "firstName", {
        set: function (newFirstName) {
            this.validateName(newFirstName, "first");
            this.firstNameValue = newFirstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        set: function (newLastName) {
            this.validateName(newLastName, "last");
            this.lastNameValue = newLastName;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.validateAge = function (newAge) {
        if (newAge <= 0 || newAge > 100) {
            throw new Error("Invalid age. Age must be between 1 and 100.");
        }
    };
    Person.prototype.validateName = function (name, type) {
        if (!name) {
            throw new Error("Invalid ".concat(type, " name. ").concat(type, " name cannot be empty."));
        }
    };
    return Person;
}());
var person = new Person();
person.age = 10;
person.firstName = 'aaa';
person.lastName = 'bbb';
console.log(person.age); // Output: 10
console.log(person.fullName); // Output: aaa bbb
