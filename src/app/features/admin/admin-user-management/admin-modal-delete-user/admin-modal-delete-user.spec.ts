import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModalDeleteUser } from './admin-modal-delete-user';

describe('AdminModalDeleteUser', () => {
  let component: AdminModalDeleteUser;
  let fixture: ComponentFixture<AdminModalDeleteUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminModalDeleteUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminModalDeleteUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
