import { TestBed } from '@angular/core/testing';

import { BeahaviorSubjectService } from './beahavior-subject.service';

describe('BeahaviorSubjectService', () => {
  let service: BeahaviorSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeahaviorSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
