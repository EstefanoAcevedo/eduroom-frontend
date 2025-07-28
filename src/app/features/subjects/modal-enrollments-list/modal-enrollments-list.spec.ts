import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEnrollmentsList } from './modal-enrollments-list';

describe('ModalEnrollmentsList', () => {
  let component: ModalEnrollmentsList;
  let fixture: ComponentFixture<ModalEnrollmentsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEnrollmentsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEnrollmentsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
