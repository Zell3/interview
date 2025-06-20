import { TestBed } from '@angular/core/testing';

import { Judge0 } from './judge0';

describe('Judge0', () => {
  let service: Judge0;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Judge0);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
