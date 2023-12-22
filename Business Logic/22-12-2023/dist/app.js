"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emailvalidator_1 = require("./emailvalidator");
let email = 'john.doe@typescripttutorial.net';
let validator = new emailvalidator_1.emailvalidator();
let result = validator.isvalid(email);
console.log(result);
