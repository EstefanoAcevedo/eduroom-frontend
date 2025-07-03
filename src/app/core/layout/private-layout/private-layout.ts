import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../../../shared/components/header/header";
import { Footer } from "../../../shared/components/footer/footer";
import { Sidebar } from "../../../shared/components/sidebar/sidebar";

@Component({
  selector: 'app-private-layout',
  imports: [Header, Footer, RouterOutlet, Sidebar],
  templateUrl: './private-layout.html',
  styleUrl: './private-layout.css'
})
export class PrivateLayout {

}
