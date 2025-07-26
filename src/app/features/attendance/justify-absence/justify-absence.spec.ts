import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustifyAbsence } from './justify-absence';

describe('JustifyAbsence', () => {
  let component: JustifyAbsence;
  let fixture: ComponentFixture<JustifyAbsence>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JustifyAbsence]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustifyAbsence);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
