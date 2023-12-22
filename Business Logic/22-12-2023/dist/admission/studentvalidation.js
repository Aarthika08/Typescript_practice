"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentvalidation = void 0;
var studentvalidation;
(function (studentvalidation) {
    function isvalidusername(username) {
        // return username.length>=5 && /^[a-z][A-Z]_$/.test(username);
        return typeof username === 'string' && /^[a-zA-Z]+$/.test(username) && username.length >= 5;
    }
    studentvalidation.isvalidusername = isvalidusername;
    function isvalidphone(phone) {
        return /^\d{10}$/.test(phone);
    }
    studentvalidation.isvalidphone = isvalidphone;
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    studentvalidation.isValidEmail = isValidEmail;
    function isValidGender(gender) {
        return typeof gender === 'string' && (gender === 'male' || gender === 'female' || gender === 'other');
    }
    studentvalidation.isValidGender = isValidGender;
    function isValidMarks(marks) {
        // Add validation logic for marks (e.g., within a certain range)
        return marks >= 300 && marks <= 500;
    }
    studentvalidation.isValidMarks = isValidMarks;
})(studentvalidation || (exports.studentvalidation = studentvalidation = {}));
