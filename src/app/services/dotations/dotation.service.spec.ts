import { TestBed } from '@angular/core/testing';

import { DotationService } from './dotation.service';

describe('DotationService', () => {
  let service: DotationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DotationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
