import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAttendanceOverview } from './chart-attendance-overview';

describe('ChartAttendanceOverview', () => {
  let component: ChartAttendanceOverview;
  let fixture: ComponentFixture<ChartAttendanceOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartAttendanceOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartAttendanceOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
