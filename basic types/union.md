write  typescript to add two values 

function add(a:any,b:any){
  if (typeof(a)==='number'&& typeof(b)==='number')
  {
    return a+b
  }
  else if( (typeof(a)==='string'&& typeof(b)==='string'))
  {
    return a.concat(b)
  }
  else{
    throw Error("not running uggg")

  }
}

console.log(add(8,9))
console.log(add('apple ',"is a fruit"))

output
[LOG]: 17 
[LOG]: "appleis a fruit" 

console.log(add(true,false))--not allowed
_______________________________________________________________________________________________________________________________________________________________________________________________________________________
A union type describes a value that can be one of several types, not just two. For example number | string | boolean is the type of a value that can be a number, a string, or a boolean.

function add(a:number|string,b:number|string){
  if (typeof(a)==='number'&& typeof(b)==='number')
  {
    return a+b
  }
  else if( (typeof(a)==='string'&& typeof(b)==='string'))
  {
    return a.concat(b)
  }
  else{
    throw Error("not running uggg")

  }
}

console.log(add(8,9))
console.log(add('apple ',"is a fruit"))

output
[LOG]: 17 
[LOG]: "appleis a fruit" 

console.log(add(true,false))--not allowed
