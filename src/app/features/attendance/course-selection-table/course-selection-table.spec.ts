import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSelectionTable } from './course-selection-table';

describe('CourseSelectionTable', () => {
  let component: CourseSelectionTable;
  let fixture: ComponentFixture<CourseSelectionTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseSelectionTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseSelectionTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
