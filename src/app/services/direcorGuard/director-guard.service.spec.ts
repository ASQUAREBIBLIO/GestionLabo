import { TestBed } from '@angular/core/testing';

import { DirectorGuardService } from './director-guard.service';

describe('DirectorGuardService', () => {
  let service: DirectorGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectorGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
