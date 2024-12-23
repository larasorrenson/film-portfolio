import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // Router outlet to display routed views
import { NavbarComponent } from './navbar/navbar.component';  // Import NavbarComponent

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],  // Add NavbarComponent here
  standalone: true,  // Mark as standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'film-portfolio';
}
