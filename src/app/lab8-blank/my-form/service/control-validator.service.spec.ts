import { TestBed } from '@angular/core/testing';

import { ControlValidatorService } from './control-validator.service';

describe('ControlValidatorService', () => {
  let service: ControlValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  fit( "Перевірка значення: екзамен" , () =>{
    let s = service.validate_control("екзамен");
    expect(s).toBe(false);

  });
  fit( "Перевірка значення: іспит" , () =>{
    let s = service.validate_control("іспит");
    expect(s).toBe(true);

  })
});
