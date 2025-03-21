import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  userName: string = "";
  message: string = "Hello from BridgeLabz";
  logoUrl: string = "assets/logo.jpg";

  openBridgeLabzSite() {
    window.open("https://www.bridgelabz.com", "_blank");
  }
}


