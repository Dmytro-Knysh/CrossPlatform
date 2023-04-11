import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameValidatorService {
  validate_name(value:string){
     const namePattern = /^[a-zA-Z' -]+$/;

     return namePattern.test(value)
   
  }
  constructor() { }
}
