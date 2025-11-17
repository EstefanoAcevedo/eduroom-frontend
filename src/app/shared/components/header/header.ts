import { Component, ViewChild } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";

@Component({
  selector: 'app-header',
  imports: [Sidebar],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  userRol: string = 'student';

  @ViewChild(Sidebar) sidebar!: Sidebar;

  showSidebar() {
    this.sidebar.open();
  }

  hideSidebar() {
    this.sidebar.close();
  }

}
