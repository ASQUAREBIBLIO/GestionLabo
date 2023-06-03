import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionBesoinsComponent } from './expression-besoins.component';

describe('ExpressionBesoinsComponent', () => {
  let component: ExpressionBesoinsComponent;
  let fixture: ComponentFixture<ExpressionBesoinsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpressionBesoinsComponent]
    });
    fixture = TestBed.createComponent(ExpressionBesoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
