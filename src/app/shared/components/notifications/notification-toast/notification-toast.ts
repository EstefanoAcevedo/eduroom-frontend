import { Component, ElementRef, ViewChild } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-notification-toast',
  imports: [NgClass],
  templateUrl: './notification-toast.html',
  styleUrl: './notification-toast.css'
})
export class NotificationToast {

  @ViewChild('notificationToast') notificationToastElement!: ElementRef;
  private notificationToastModal!: bootstrap.Modal;

  ngAfterViewInit() {
    this.notificationToastModal = new bootstrap.Modal(this.notificationToastElement.nativeElement);
  }
  
  title: string = '';
  message: string = '';
  status: 'success' | 'error' | 'info' | 'loading' = 'loading';

  show(config: {title?: string; message?: string; status: 'success' | 'error' | 'info' | 'loading';}) {
    this.title = config.title ?? this.title;
    this.message = config.message ?? this.message;
    this.status = config.status;
    this.notificationToastModal.show();
  }

  hide() {
    this.notificationToastModal.hide();
  }

}