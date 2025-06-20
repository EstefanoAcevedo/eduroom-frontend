import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherTakeAttendance } from './teacher-take-attendance';

describe('TeacherTakeAttendance', () => {
  let component: TeacherTakeAttendance;
  let fixture: ComponentFixture<TeacherTakeAttendance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherTakeAttendance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherTakeAttendance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
