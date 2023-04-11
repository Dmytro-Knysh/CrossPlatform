import { TestBed } from '@angular/core/testing';

import { NameValidatorService } from './name-validator.service';

describe('NameValidatorService', () => {
  let service: NameValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  fit( "Перевірка значення: 1234" , () =>{
    let s = service.validate_name("1234");
    expect(s).toBe(false);

  });
  fit( "Перевірка значення: ПІБ" , () =>{
    let s = service.validate_name("ПІБ");
    expect(s).toBe(true);

  })
});
