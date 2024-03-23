import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../components/inputs/button/button.component';
import { QuizComponent } from './elements/quiz/quiz.component';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [RouterLink, QuizComponent, ButtonComponent],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.css'
})
export class OnboardingComponent {
  bgImg = '../../../assets/img/login_bg.png';
  isQuizDisplayed = false;

  displayQuiz() {
    this.isQuizDisplayed = true
  }
}
