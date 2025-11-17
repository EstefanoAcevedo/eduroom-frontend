import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../../../shared/components/header/header";
import { Footer } from "../../../shared/components/footer/footer";

@Component({
  selector: 'app-private-layout',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './private-layout.html',
  styleUrl: './private-layout.css'
})
export class PrivateLayout {

}
