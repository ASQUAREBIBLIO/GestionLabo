import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditetablissementComponent } from './editetablissement.component';

describe('EditetablissementComponent', () => {
  let component: EditetablissementComponent;
  let fixture: ComponentFixture<EditetablissementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditetablissementComponent]
    });
    fixture = TestBed.createComponent(EditetablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
