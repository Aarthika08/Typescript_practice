# Funtion types

**syntax**
>(parameter: type, parameter:type,...) => type

**how to assign return type**
>let add(a:number,b:number) =>number;

In this example:

The function type accepts two arguments: x and y with the type number.
The type of the return value is number that follows the fat arrow (=>) appeared between parameters and return type.


**how to assign**

>add=function(a:number,b:number){
>
>return a+b
>
>}

**declare and assign variable**

>let add:(a1:number,a2:number)=>number=
>function(a:number,b:number){
>
>return a+b
>
>}


example

>let add = function (x: string, y: string): number {
>
>   return x.concat(y).length;
>
>};
>
>console.log(add('10','200'))
