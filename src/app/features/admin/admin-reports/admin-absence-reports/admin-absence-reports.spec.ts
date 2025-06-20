import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAbsenceReports } from './admin-absence-reports';

describe('AdminAbsenceReports', () => {
  let component: AdminAbsenceReports;
  let fixture: ComponentFixture<AdminAbsenceReports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAbsenceReports]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAbsenceReports);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
