import { Component, HostListener } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component'

@Component({
  selector: 'app-home',
  imports: [FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private isFullscreen = false; // Track if the video is fullscreen

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const videoContainer = document.querySelector('.video-container') as HTMLElement;
    const video = document.getElementById('showreelVideo') as HTMLIFrameElement;

    if (videoContainer) {
      const scrollPosition = window.scrollY;

      // Check if the video is in fullscreen state
      if (scrollPosition > 200 && !this.isFullscreen) {
        this.isFullscreen = true;

        // Zoom the video to fullscreen
        videoContainer.style.transform = 'scale(1.5)';
        videoContainer.style.width = '100vw';
        videoContainer.style.height = '56.25vw'; // Maintain 16:9 aspect ratio

        // Autoplay the video
        video.contentWindow?.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          '*'
        );
      } else if (scrollPosition <= 200 && this.isFullscreen) {
        this.isFullscreen = false;

        // Reset video to original size
        videoContainer.style.transform = 'scale(1)';
        videoContainer.style.width = '560px';
        videoContainer.style.height = '315px';

        // Pause the video
        video.contentWindow?.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          '*'
        );
      }
    }
  }
}
