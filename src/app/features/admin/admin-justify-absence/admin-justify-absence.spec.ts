import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJustifyAbsence } from './admin-justify-absence';

describe('AdminJustifyAbsence', () => {
  let component: AdminJustifyAbsence;
  let fixture: ComponentFixture<AdminJustifyAbsence>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminJustifyAbsence]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminJustifyAbsence);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
