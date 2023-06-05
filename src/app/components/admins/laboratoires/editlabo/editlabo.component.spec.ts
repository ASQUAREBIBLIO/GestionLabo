import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlaboComponent } from './editlabo.component';

describe('EditlaboComponent', () => {
  let component: EditlaboComponent;
  let fixture: ComponentFixture<EditlaboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditlaboComponent]
    });
    fixture = TestBed.createComponent(EditlaboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
