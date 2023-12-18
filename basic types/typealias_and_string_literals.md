#  introduction to TypeScript type aliases
Type aliases allow you to create a new name for an existing type. 

### syntax:

> type alias = existingType;

The existing type can be any valid TypeScript type. 


### example 

>type chars=string;
>let message=chars;
>console.log(message);

output
>string

**code 2**

>type alphanumeric=number|string;
>
>let message=alphanumeric;
>
>message=12;
>
>message="abc";
>
>message=true ;//error


> [!NOTE]
> Use type aliases to define new names for existing types.

# string literals

**example 1**

> let click='click';

**example 2**

>let mouseevent = 'click|dblclick|mouseup|mousedown';
>
>mouseevent='click';
>
>mouseevent = 'dblclick';
>
>mouseevent = 'mouseup';
>
>mouseevent = 'mousedown';
>
>mouseevent = 'scroll'; //error
>
