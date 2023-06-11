import { TestBed } from '@angular/core/testing';

import { TypeBesoinService } from './type-besoin.service';

describe('TypeBesoinService', () => {
  let service: TypeBesoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeBesoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
