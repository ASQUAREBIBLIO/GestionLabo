import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelexpressionComponent } from './delexpression.component';

describe('DelexpressionComponent', () => {
  let component: DelexpressionComponent;
  let fixture: ComponentFixture<DelexpressionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelexpressionComponent]
    });
    fixture = TestBed.createComponent(DelexpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
