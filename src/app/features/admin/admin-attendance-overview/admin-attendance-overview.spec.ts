import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAttendanceOverview } from './admin-attendance-overview';

describe('AdminAttendanceOverview', () => {
  let component: AdminAttendanceOverview;
  let fixture: ComponentFixture<AdminAttendanceOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAttendanceOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAttendanceOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
