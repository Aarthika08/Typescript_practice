import {studentvalidation} from './studentvalidation';
import { admissioneligibility } from './admissioneligibility';
import * as readlineSync from 'readline-sync';

// function getStudentInfoFromUse():any{
//     const username=readlineSync.question("enter Username")
//    const phone = readlineSync.question("Enter phone number: ");
//     const email = readlineSync.question("Enter email: ");
//     const gender = readlineSync.question("Enter gender (male/female/other): ");
//     const marks = Number(readlineSync.question("Enter marks: "));

//     return { username, phone, email, gender, marks };
// }

// function main()
// {
//     const studentInfo=getStudentInfoFromUse();

//     if(admissioneligibility.iseligible(  studentInfo.username,
//         studentInfo.phone,
//         studentInfo.email,
//         studentInfo.gender,
//         studentInfo.marks))
//         {
//             console.log("Congratulations! You are eligible for admission.");
//             // console.table(studentInfo.username+" "+studentInfo.phone+" "+studentInfo.email+" "+studentInfo.gender+" "+studentInfo.marks);
//             console.table([studentInfo]); // Display as an array of a single student
//             // console.table(studentsArray);

//         }
//         else
//         {
           
//             console.log("Sorry, you are not eligible for admission. Please check your information and try again.");
//         }
// }

// main();



interface Student {
  username: string;
  phone: string;
  email: string;
  gender: string;
  marks: number;
}

function getStudentInfoFromUser(): Student {
  const username = readlineSync.question("Enter Username: ");
  const phone = readlineSync.question("Enter phone number: ");
  const email = readlineSync.question("Enter email: ");
  const gender = readlineSync.question("Enter gender (male/female/other): ");
  const marks = Number(readlineSync.question("Enter marks: "));

  return { username, phone, email, gender, marks };
}

function main() {
  let continueAdding = true;
  const students: Student[] = [];

  while (continueAdding) {
    console.log("\nNew Student Admission:");
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
      [`Student ${index + 1}`]: admissioneligibility.iseligible(
        student.username,
        student.phone,
        student.email,
        student.gender,
        student.marks
      ) ? 'Eligible' : 'Not Eligible'
    };
  });

  console.table(admissionResults);
}

main();
