import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlValidatorService {
  validate_control(value: string) {
    const pattern: string[] = ["іспит", "залік", "exam", "test"];
    for (let i = 0; i < 4; i++) {
      if (value == pattern[i]) {
        return true;
      }
    }
    return false;
  }

  
  constructor() { }
}
