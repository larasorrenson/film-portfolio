import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';  // Import the root component
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';  // Import routes configuration

bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes)]  // Provide routes
});
