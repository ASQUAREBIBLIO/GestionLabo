import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexpressionComponent } from './addexpression.component';

describe('AddexpressionComponent', () => {
  let component: AddexpressionComponent;
  let fixture: ComponentFixture<AddexpressionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddexpressionComponent]
    });
    fixture = TestBed.createComponent(AddexpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
