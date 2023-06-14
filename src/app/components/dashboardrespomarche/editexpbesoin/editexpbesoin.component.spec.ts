import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditexpbesoinComponent } from './editexpbesoin.component';

describe('EditexpbesoinComponent', () => {
  let component: EditexpbesoinComponent;
  let fixture: ComponentFixture<EditexpbesoinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditexpbesoinComponent]
    });
    fixture = TestBed.createComponent(EditexpbesoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
