import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherJustifyAbsence } from './teacher-justify-absence';

describe('TeacherJustifyAbsence', () => {
  let component: TeacherJustifyAbsence;
  let fixture: ComponentFixture<TeacherJustifyAbsence>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherJustifyAbsence]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherJustifyAbsence);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
