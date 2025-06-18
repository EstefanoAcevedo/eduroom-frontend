import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceReports } from './absence-reports';

describe('AbsenceReports', () => {
  let component: AbsenceReports;
  let fixture: ComponentFixture<AbsenceReports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbsenceReports]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbsenceReports);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
