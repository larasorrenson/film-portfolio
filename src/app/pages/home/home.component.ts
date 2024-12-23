import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import RouterModule for routing

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],  // Import RouterModule to make routing work
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
