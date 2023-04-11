import { AbstractControl, ValidatorFn } from "@angular/forms";
import { ControlValidatorService } from "./control-validator.service";

export function controlValidator(): ValidatorFn{
    return(
        control: AbstractControl
    ): {[key:string]:boolean} | null =>{
      let validator = new ControlValidatorService()
      let valid = !control.value || validator.validate_control(control.value)
      return valid ? null : {name:true}   
    }
}