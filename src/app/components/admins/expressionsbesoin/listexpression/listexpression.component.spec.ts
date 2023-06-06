import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListexpressionComponent } from './listexpression.component';

describe('ListexpressionComponent', () => {
  let component: ListexpressionComponent;
  let fixture: ComponentFixture<ListexpressionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListexpressionComponent]
    });
    fixture = TestBed.createComponent(ListexpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
