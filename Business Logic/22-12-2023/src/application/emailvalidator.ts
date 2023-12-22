
import {validator} from "./validator"

class emailvalidator implements validator{
isvalid(s:string):boolean{
    const emailregex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailregex.test(s)
}

}
export {emailvalidator}