import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcaRechComponent } from './uca-rech.component';

describe('UcaRechComponent', () => {
  let component: UcaRechComponent;
  let fixture: ComponentFixture<UcaRechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UcaRechComponent]
    });
    fixture = TestBed.createComponent(UcaRechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
