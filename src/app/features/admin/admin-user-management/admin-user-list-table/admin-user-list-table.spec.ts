import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserListTable } from './admin-user-list-table';

describe('AdminUserListTable', () => {
  let component: AdminUserListTable;
  let fixture: ComponentFixture<AdminUserListTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUserListTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUserListTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
