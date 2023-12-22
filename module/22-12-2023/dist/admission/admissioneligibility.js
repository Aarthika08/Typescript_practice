"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.admissioneligibility = void 0;
const studentvalidation_1 = require("./studentvalidation");
var admissioneligibility;
(function (admissioneligibility) {
    function iseligible(username, phone, email, gender, marks) {
        const isusernamevalid = studentvalidation_1.studentvalidation.isvalidusername(username);
        const isphonevalid = studentvalidation_1.studentvalidation.isvalidphone(phone);
        const isemailvalid = studentvalidation_1.studentvalidation.isValidEmail(email);
        const isgendervalid = studentvalidation_1.studentvalidation.isValidGender(gender);
        const ismarksvalid = studentvalidation_1.studentvalidation.isValidMarks(marks);
        return isusernamevalid && isphonevalid && isemailvalid && isgendervalid && ismarksvalid;
    }
    admissioneligibility.iseligible = iseligible;
})(admissioneligibility || (exports.admissioneligibility = admissioneligibility = {}));
