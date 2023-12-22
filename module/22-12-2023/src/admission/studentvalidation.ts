export module studentvalidation
{
export function isvalidusername(username:string):boolean{

    // return username.length>=5 && /^[a-z][A-Z]_$/.test(username);
    return typeof username === 'string' && /^[a-zA-Z]+$/.test(username) && username.length >= 5;

}

export function isvalidphone(phone:string):boolean{
    
    //phone values will e checked if it is digit or not  because of this /^\d{10}
    return /^\d{10}$/.test(phone)
}
export function isValidEmail(email:string):boolean{
    
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
export function isValidGender(gender:string):boolean{
    
    return typeof gender === 'string' && (gender === 'M' || gender === 'F' || gender === 'other');
}
export function isValidMarks(marks: number): boolean {
    // Add validation logic for marks (e.g., within a certain range)
    return marks >=300 && marks <= 500;
  }
}