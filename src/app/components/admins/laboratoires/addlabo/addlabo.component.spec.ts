import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlaboComponent } from './addlabo.component';

describe('AddlaboComponent', () => {
  let component: AddlaboComponent;
  let fixture: ComponentFixture<AddlaboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddlaboComponent]
    });
    fixture = TestBed.createComponent(AddlaboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
