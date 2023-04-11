import { AbstractControl, ValidatorFn } from "@angular/forms";
import { NameValidatorService } from "./name-validator.service";

export function nameValidator(): ValidatorFn{
    return(
        control: AbstractControl
    ): {[key:string]:boolean} | null =>{
      let validator = new NameValidatorService()
      let valid = !control.value || validator.validate_name(control.value)
      return valid ? null : {name:true}   
    }
}