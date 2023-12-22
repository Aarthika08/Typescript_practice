import { emailvalidator } from './emailvalidator';

let email = 'john.doe@typescripttutorial.net';
let validator = new emailvalidator();
let result = validator.isvalid(email);

console.log(result);