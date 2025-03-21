import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  message: string = "Hello from BridgeLabz";
  logoUrl: string = "assets/logo.jpg";
}
