import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGenerateReports } from './admin-generate-reports';

describe('AdminGenerateReports', () => {
  let component: AdminGenerateReports;
  let fixture: ComponentFixture<AdminGenerateReports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminGenerateReports]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGenerateReports);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
