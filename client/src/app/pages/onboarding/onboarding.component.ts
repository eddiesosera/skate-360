import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../components/inputs/button/button.component';
import { QuizComponent } from './elements/quiz/quiz.component';
import { ToggleQuizService } from '../../services/page/onboarding/toggle-quiz.service';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [RouterLink, QuizComponent, ButtonComponent],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.css'
})
export class OnboardingComponent {
  bgImg = '../../../assets/img/login_bg.png';
  isQuizDisplayed!: boolean;
  result: any;

  constructor(private toggleQuiz: ToggleQuizService) { }

  ngOnInit(): void {
    this.toggleQuiz.currentToggleState.subscribe(state => this.isQuizDisplayed = state)
  }

  displayQuiz() {
    this.toggleQuiz.changeToggleState(true)
  };

}
