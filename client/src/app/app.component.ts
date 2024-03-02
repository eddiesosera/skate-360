import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit {
  backgroundVideo = '../assets/video/grunge_textures.mp4';

  autoPlayVideo(): void {
    const videoElement = document.querySelector('.background-video');

    if (videoElement instanceof HTMLVideoElement) {
      videoElement.play();
    } else {
      console.error("Video element not found or is not an HTMLVideoElement.");
    }
  }

  ngAfterViewInit(): void {
    this.autoPlayVideo()
  }
}
