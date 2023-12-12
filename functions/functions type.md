# Funtion types

**syntax**
>(parameter: type, parameter:type,...) => type

**How to assign return type**
>let add(a:number,b:number) =>number;

In this example:

The function type accepts two arguments: x and y with the type number.
The type of the return value is number that follows the fat arrow (=>) appeared between parameters and return type.


**How to assign**

>add=function(a:number,b:number){
>
>return a+b
>
>}

**Declare and assign variable**

>let add:(a1:number,a2:number)=>number=
>
>function(a:number,b:number){
>
>return a+b
>
>}


Example

>let add = function (x: string, y: string): number {
>
>   return x.concat(y).length;
>
>};
>
>console.log(add('10','200'))

By using type of annotation we can reduce the number of lines

>let add = function (x: string, y: string): number {
>
>   return x.concat(y).length;
>
>};
>
>console.log(add('10','200'))


Here it is change into

>let add:(x: string, y: string)=>number
>
>function(a:string,b;string) {
>
>   return x.concat(y).length;
>
>};
>
>console.log(add('10','200'))
