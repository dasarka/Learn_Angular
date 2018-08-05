import { AbstractControl, ValidationErrors } from "@angular/forms";
import { resolve } from "../../../node_modules/@types/q";

export class PasswordValidators{
    static checkPassword(control  :  AbstractControl):  ValidationErrors | null{
        let newPassword=control.get('newPassword').value;
        let confirmPassword=control.get('confirmPassword').value;
        if(newPassword!==confirmPassword)
            return {shouldNotMatch : true};
        return null;
    }
    static verifyPassword(control  :   AbstractControl) :  Promise<ValidationErrors | null>{
        return new Promise((resolve,reject)=>{
            //call to server asynchronously
            setTimeout(()=>{
                var oldPassword='1234';
                if(control.value!==oldPassword)
                    return resolve({invalidPassword : true});
                else 
                    return resolve(null);
            },2000);

        });

        
       
    }
}