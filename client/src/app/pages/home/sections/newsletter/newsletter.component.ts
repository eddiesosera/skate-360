import { Component } from '@angular/core';
import { EmailInputComponent } from './sections/email-input/email-input.component';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [EmailInputComponent],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css'
})
export class NewsletterComponent {
  skateImg = '../../../../../assets/img/2fx.png';

}
