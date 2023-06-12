import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMembreComponent } from './edit-membre.component';

describe('EditMembreComponent', () => {
  let component: EditMembreComponent;
  let fixture: ComponentFixture<EditMembreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMembreComponent]
    });
    fixture = TestBed.createComponent(EditMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
