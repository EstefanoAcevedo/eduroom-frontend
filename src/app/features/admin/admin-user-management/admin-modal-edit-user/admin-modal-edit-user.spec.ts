import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModalEditUser } from './admin-modal-edit-user';

describe('AdminModalEditUser', () => {
  let component: AdminModalEditUser;
  let fixture: ComponentFixture<AdminModalEditUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminModalEditUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminModalEditUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
