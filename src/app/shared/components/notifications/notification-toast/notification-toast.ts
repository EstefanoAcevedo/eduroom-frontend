import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgClass } from '@angular/common';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-notification-toast',
  imports: [NgClass],
  templateUrl: './notification-toast.html',
  styleUrl: './notification-toast.css'
})
export class NotificationToast {

  @ViewChild('notificationToast') notificationToastElement!: ElementRef;
  private notificationToastModal!: bootstrap.Toast;

  ngAfterViewInit() {
    this.notificationToastModal = new bootstrap.Toast(this.notificationToastElement.nativeElement);
  }

  title: string = '';
  message: string = '';
  status: 'success' | 'error' | 'info' = 'info';

  show(config: {title?: string; message?: string; status: 'success' | 'error' | 'info';}) {
    this.title = config.title ?? this.title;
    this.message = config.message ?? this.message;
    this.status = config.status;
    this.notificationToastModal.show();
  }

  hide() {
    this.notificationToastModal.hide();
  }

}