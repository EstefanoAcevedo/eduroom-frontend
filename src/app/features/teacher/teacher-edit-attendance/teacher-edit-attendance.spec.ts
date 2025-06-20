import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEditAttendance } from './teacher-edit-attendance';

describe('TeacherEditAttendance', () => {
  let component: TeacherEditAttendance;
  let fixture: ComponentFixture<TeacherEditAttendance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherEditAttendance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherEditAttendance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
