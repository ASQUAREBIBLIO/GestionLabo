import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddetablissementComponent } from './addetablissement.component';

describe('AddetablissementComponent', () => {
  let component: AddetablissementComponent;
  let fixture: ComponentFixture<AddetablissementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddetablissementComponent]
    });
    fixture = TestBed.createComponent(AddetablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
