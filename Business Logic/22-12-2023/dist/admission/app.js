"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const admissioneligibility_1 = require("./admissioneligibility");
const readlineSync = __importStar(require("readline-sync"));
function getStudentInfoFromUser() {
    const username = readlineSync.question("Enter Username: ");
    const phone = readlineSync.question("Enter phone number: ");
    const email = readlineSync.question("Enter email: ");
    const gender = readlineSync.question("Enter gender (male/female/other): ");
    const marks = Number(readlineSync.question("Enter marks: "));
    return { username, phone, email, gender, marks };
}
function main() {
    let continueAdding = true;
    const students = [];
    while (continueAdding) {
        console.log("\nNew Student:");
        const studentInfo = getStudentInfoFromUser();
        students.push(studentInfo);
        const continueResponse = readlineSync.question("Do you want to continue adding students? (Y/N): ");
        continueAdding = continueResponse.toUpperCase() === 'Y';
    }
    console.log("\nStudent Information:");
    console.table(students);
    console.log("\nAdmission Results:");
    const admissionResults = students.map((student, index) => {
        return {
            [`Student ${index + 1}`]: admissioneligibility_1.admissioneligibility.iseligible(student.username, student.phone, student.email, student.gender, student.marks) ? 'Eligible' : 'Not Eligible'
        };
    });
    console.table(admissionResults);
}
main();
