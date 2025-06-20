import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTakeAttendance } from './admin-take-attendance';

describe('AdminTakeAttendance', () => {
  let component: AdminTakeAttendance;
  let fixture: ComponentFixture<AdminTakeAttendance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTakeAttendance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTakeAttendance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
