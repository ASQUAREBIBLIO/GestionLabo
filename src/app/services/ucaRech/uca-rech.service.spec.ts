import { TestBed } from '@angular/core/testing';

import { UcaRechService } from './uca-rech.service';

describe('UcaRechService', () => {
  let service: UcaRechService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UcaRechService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
