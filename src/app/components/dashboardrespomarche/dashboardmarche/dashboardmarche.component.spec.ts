import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardmarcheComponent } from './dashboardmarche.component';

describe('DashboardmarcheComponent', () => {
  let component: DashboardmarcheComponent;
  let fixture: ComponentFixture<DashboardmarcheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardmarcheComponent]
    });
    fixture = TestBed.createComponent(DashboardmarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
