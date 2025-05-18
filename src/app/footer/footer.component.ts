import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements AfterViewInit {
  @ViewChild('btnRef') btnRef!: ElementRef<HTMLAnchorElement>;
  @ViewChild('spanRef') spanRef!: ElementRef<HTMLSpanElement>;

  ngAfterViewInit() {
    const button = this.btnRef.nativeElement;
    const spotlight = this.spanRef.nativeElement;

    const handleMouseMove = (event: MouseEvent) => {
      const { width } = button.getBoundingClientRect();
      const offset = event.offsetX;
      const left = `${(offset / width) * 100}%`;

      spotlight.animate({ left }, { duration: 250, fill: 'forwards' });
    };

    const handleMouseLeave = () => {
      spotlight.animate({ left: '50%' }, { duration: 100, fill: 'forwards' });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup listeners on component destroy
    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }
}
