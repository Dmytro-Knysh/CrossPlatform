import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlValidatorService {
  validate_control(value: string) {
    const pattern: string[] = ["іспит", "залік", "exam", "test"];
    console.log(value);
    for (let i = 0; i < 4; i++) {
      console.log(pattern[i]);
      if (value == pattern[i]) {
        return true;
      }
    }
    return false;
  }

  
  constructor() { }
}
