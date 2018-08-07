import { AbstractControl, ValidationErrors } from "@angular/forms";
import { resolve } from "../../../node_modules/@types/q";

export class UserNameValidators{
    static cannotContainSpace(control  :   AbstractControl) :  ValidationErrors | null{
        if((control.value as string).indexOf(' ')>=0)
            return {cannotContainSpace : true};
        
        return null;
    }
    static shouldBeUnique(control  :   AbstractControl) :  Promise<ValidationErrors | null>{
        return new Promise((resolve,reject)=>{
            //call to server asynchronously
            setTimeout(()=>{
                var usernames=['abc@sample.com','abc123@sample.com','abc345@sample.com'];
                if(usernames.includes(control.value))
                    return resolve({shouldBeUnique : true});
                else 
                    return resolve(null);
            },15000);

        });

        
       
    }
}