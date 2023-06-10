import { TestBed } from '@angular/core/testing';

import { MembreGuardService } from './membre-guard.service';

describe('MembreGuardService', () => {
  let service: MembreGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembreGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
