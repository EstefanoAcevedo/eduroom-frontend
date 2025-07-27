import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPreviousAttendance } from './modal-previous-attendance';

describe('ModalPreviousAttendance', () => {
  let component: ModalPreviousAttendance;
  let fixture: ComponentFixture<ModalPreviousAttendance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPreviousAttendance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPreviousAttendance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
