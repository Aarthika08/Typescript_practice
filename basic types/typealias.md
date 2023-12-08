#  introduction to TypeScript type aliases
Type aliases allow you to create a new name for an existing type. 
###syntax:

> type alias = existingType;

The existing type can be any valid TypeScript type.

###example 

>type chars=string;
>let message=chars
>console.log(message)

output
>string

**code 2**

>type alphanumeric=number|string
>let msg=alphanumeric
>msg=12
>msg="abc"
>msg=true //error

>[!summary]
>Use type aliases to define new names for existing types.

