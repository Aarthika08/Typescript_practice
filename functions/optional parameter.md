> [!NOTE]
>Use the parameter?: type syntax to make a **parameter optional**.
> 
>Use the expression typeof(parameter) !== 'undefined' to check if the parameter has been initialized. 

example 1


>       function add(firstnumber:number,secondnumber:number,thirdnumber?: number):number
>
>      {
>
>      if (typeof thirdnumber!=='undefined')
>
>     {
>
>        return firstnumber*secondnumber*thirdnumber;
>
>     }
>
>            return firstnumber*secondnumber;
>
>     }
>
>     console.log(add(10,20,30))

output

6000


example 2

>       function add(firstnumber:number,secondnumber?:number,thirdnumber: number):number
>
>      {
>
>      if (typeof thirdnumber!=='undefined')
>
>     {
>
>        return firstnumber*secondnumber*thirdnumber;
>
>     }
>
>            return firstnumber*thirdnumber;
>
>     }
>
>     console.log(add(10,20,30))

output 
error
A required parameter cannot follow an optional parameter.


>[!warning]
>The number of arguments is different from the number of parameters specified in the function.
>
>Or the types of arguments are not compatible with the types of function parameters.
