import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../components/inputs/button/button.component';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [RouterLink, ButtonComponent],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.css'
})
export class OnboardingComponent {
  bgImg = '../../../assets/img/login_bg.png'

}
