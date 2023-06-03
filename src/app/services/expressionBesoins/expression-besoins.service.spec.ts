import { TestBed } from '@angular/core/testing';

import { ExpressionBesoinsService } from './expression-besoins.service';

describe('ExpressionBesoinsService', () => {
  let service: ExpressionBesoinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpressionBesoinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
