class Person {
  private _age: number;
  private fname: string;
  private lname: string;

  public get age(): number {
    return this._age;
  }

  public set age(tAge: number) {
    if (tAge <= 0 || tAge > 100) {
      throw new Error("Invalid age");
    }
    this._age = tAge;
  }

  public getFullName(): string {
    return `${this.fname} ${this.lname}`;
  }
}

let person = new Person();
person.age = 10;
person.fname = 'aaa';
person.lname = 'bbb';

console.log(person.age); // Output: 10
console.log(person.getFullName()); // Output: aaa bbb
___________________________________________________________________________________________________________________________________________________________
