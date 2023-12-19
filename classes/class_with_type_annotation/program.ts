program.ts
class person
{
id;
firstname;
lastname;

constructor(id,firstname,lastname){
this.id=id;
this.firstname=firstname;
this.lastname=lastname;

get fullname()
{
return ${this.firstname} ${this.lastname}
}
}
}

let per=new person(123,'aaa','bbb')
console.log(per.getFullName());

same program with type anotation

class Person {
    ssn: number;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
