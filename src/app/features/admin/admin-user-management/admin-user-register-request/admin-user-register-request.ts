import { Component, inject, ViewChild } from '@angular/core';
import { EnrollmentInterface } from '../../../../core/models/enrollments/enrollment-interface';
import { EnrollmentsServices } from '../../../../core/services/enrollments/enrollments-services';
import { NotificationToast } from '../../../../shared/components/notifications/notification-toast/notification-toast';

@Component({
  selector: 'app-admin-user-register-request',
  imports: [NotificationToast],
  templateUrl: './admin-user-register-request.html',
  styleUrl: './admin-user-register-request.css'
})
export class AdminUserRegisterRequest {

  private enrollmentsService = inject(EnrollmentsServices);
  @ViewChild(NotificationToast) notificationToast!: NotificationToast;

  ngOnInit() {
    this.getPendingEnrollments();
  }

  enrollments: EnrollmentInterface[] = [];

  getPendingEnrollments() {
    this.enrollmentsService.getPendingEnrollments().subscribe({
      next: (response) => {
        this.enrollments = response;
      },
      error: (error) => {
        console.error('Error al obtener las inscripciones pendientes', error)
      }
    })
  }

  approveEnrollment(enrollment: EnrollmentInterface) {
    enrollment.isLoading = true;
    enrollment.enrollment_status = 'approved';
    this.enrollmentsService.updateEnrollment(enrollment).subscribe({
      next: (response) => {
        enrollment.isLoading = false;
        enrollment.isApproved = true;
      },
      error: (error) => {
        this.notificationToast.show({
          status: 'error',
          title: 'Error',
          message: 'Ocurrió un error al intentar aprobar la inscripción. Por favor, intente nuevamente más tarde.'
        })
        enrollment.isLoading = false;
      }
    })
  }

  rejectEnrollment(enrollment: EnrollmentInterface) {
    enrollment.isLoading = true;
    enrollment.enrollment_status = 'rejected';
    this.enrollmentsService.updateEnrollment(enrollment).subscribe({
      next: (response) => {
        enrollment.isLoading = false;
        enrollment.isRejected = true;
      },
      error: (error) => {
        this.notificationToast.show({
          status: 'error',
          title: 'Error',
          message: 'Ocurrió un error al intentar rechazar la inscripción'
        })
        enrollment.isLoading = false;
      }
    })
  }

}
