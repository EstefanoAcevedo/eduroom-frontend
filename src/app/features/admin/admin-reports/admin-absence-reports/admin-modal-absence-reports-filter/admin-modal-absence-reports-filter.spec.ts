import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModalAbsenceReportsFilter } from './admin-modal-absence-reports-filter';

describe('AdminAbsenceReportsFilter', () => {
  let component: AdminModalAbsenceReportsFilter;
  let fixture: ComponentFixture<AdminModalAbsenceReportsFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminModalAbsenceReportsFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminModalAbsenceReportsFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
