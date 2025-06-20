import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAttendanceList } from './teacher-attendance-list';

describe('TeacherAttendanceList', () => {
  let component: TeacherAttendanceList;
  let fixture: ComponentFixture<TeacherAttendanceList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherAttendanceList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherAttendanceList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
