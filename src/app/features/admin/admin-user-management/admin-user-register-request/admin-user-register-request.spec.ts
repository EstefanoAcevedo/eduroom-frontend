import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserRegisterRequest } from './admin-user-register-request';

describe('AdminUserRegisterRequest', () => {
  let component: AdminUserRegisterRequest;
  let fixture: ComponentFixture<AdminUserRegisterRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUserRegisterRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUserRegisterRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
