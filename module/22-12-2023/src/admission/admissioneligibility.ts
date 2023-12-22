import {studentvalidation} from './studentvalidation';

export module admissioneligibility{
    export function iseligible(username:string,phone:string,email:string,gender:string,marks:number):boolean{
        const isusernamevalid=studentvalidation.isvalidusername(username);
        const isphonevalid =studentvalidation.isvalidphone(phone);
        const isemailvalid=studentvalidation.isValidEmail(email);
        const isgendervalid=studentvalidation.isValidGender(gender);
        const ismarksvalid =studentvalidation.isValidMarks(marks);
return isusernamevalid && isphonevalid && isemailvalid && isgendervalid && ismarksvalid;

    }
}