"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailvalidator = void 0;
class emailvalidator {
    isvalid(s) {
        const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailregex.test(s);
    }
}
exports.emailvalidator = emailvalidator;
