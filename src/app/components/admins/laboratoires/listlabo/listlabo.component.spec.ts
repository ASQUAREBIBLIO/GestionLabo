import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlaboComponent } from './listlabo.component';

describe('ListlaboComponent', () => {
  let component: ListlaboComponent;
  let fixture: ComponentFixture<ListlaboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListlaboComponent]
    });
    fixture = TestBed.createComponent(ListlaboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
