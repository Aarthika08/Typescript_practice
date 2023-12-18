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
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var Shape = /** @class */ (function (_super) {
    __extends(Shape, _super);
    function Shape(id, firstName, lastName) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.firstName = firstName;
        _this.lastName = lastName;
        return _this;
    }
    Object.defineProperty(Shape.prototype, "fullName", {
        get: function () {
            return "".concat(Math.pow(this.id, 2), "  ").concat(this.firstName, " ").concat(this.lastName);
        },
        enumerable: false,
        configurable: true
    });
    return Shape;
}(Employee));
var employee = new Shape(8, 'jo', 'go');
console.log(employee.fullName);
