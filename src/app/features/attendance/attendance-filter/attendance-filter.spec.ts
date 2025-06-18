import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceFilter } from './attendance-filter';

describe('AttendanceFilter', () => {
  let component: AttendanceFilter;
  let fixture: ComponentFixture<AttendanceFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendanceFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
