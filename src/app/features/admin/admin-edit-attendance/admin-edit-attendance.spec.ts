import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditAttendance } from './admin-edit-attendance';

describe('AdminEditAttendance', () => {
  let component: AdminEditAttendance;
  let fixture: ComponentFixture<AdminEditAttendance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEditAttendance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEditAttendance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
