import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditexpressionComponent } from './editexpression.component';

describe('EditexpressionComponent', () => {
  let component: EditexpressionComponent;
  let fixture: ComponentFixture<EditexpressionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditexpressionComponent]
    });
    fixture = TestBed.createComponent(EditexpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
