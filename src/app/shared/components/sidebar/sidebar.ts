import { Component, inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth-service';
import { NotificationToast } from "../notifications/notification-toast/notification-toast";
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, NotificationToast],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

  private authService = inject(AuthService);
  private router = inject(Router);
  @ViewChild(NotificationToast) notificationToast!: NotificationToast;

  userName: string = '';
  userRol: string = '';
  
  ngOnInit() {
    this.userName = sessionStorage.getItem('user_name') || '';
    this.userRol = sessionStorage.getItem('roles') || '';
  }

  @ViewChild('sidebar') sidebarElement!: ElementRef;
  private sidebarOffcanvas!: bootstrap.Offcanvas;

  ngAfterViewInit() {
    this.sidebarOffcanvas = new bootstrap.Offcanvas(
      this.sidebarElement.nativeElement,
      {
        backdrop: true,     
        keyboard: true,    
        scroll: false
      }
    );
  }

  open() {
    this.sidebarOffcanvas.show();
  }

  close() {
    this.sidebarOffcanvas.hide();
  }

  logout() {
    this.notificationToast.show({
        status: 'loading'
    });
    this.authService.logout({}).subscribe({
      next: (response) => {
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('user_name');
        sessionStorage.removeItem('roles');
        this.notificationToast.hide();
        this.router.navigate(['login']);
      },
      error: (error) => {
        console.error(error.error);
        this.notificationToast.show({
        status: 'error',
        message: error.error || 'Ocurrió un error inesperado al intentar cerrar sesión.',
        title: 'Error al cerrar sesión'
    });
      }
    })
  }

}
