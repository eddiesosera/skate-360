import { Component, OnInit } from '@angular/core';
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
export class OnboardingComponent implements OnInit {
  bgImg = '../../../assets/img/login_bg.png';
  isQuizDisplayed!: boolean;
  userResult: 'true' | 'false' | 'null' = 'null';
  resultFeedback!: string;

  constructor(private toggleQuiz: ToggleQuizService) { }

  ngOnInit(): void {
    this.toggleQuiz.currentToggleState.subscribe(state => this.isQuizDisplayed = state)
    this.toggleQuiz.userResult.subscribe(result => this.userResult = result)
    console.log(this.userResult, ' user result');

    if (this.userResult === "true") {
      this.resultFeedback = "Verification Successful!"
    } else if (this.userResult === "false") {
      this.resultFeedback = "Verification failed, Try again.!"
    }
  }

  displayQuiz() {
    this.toggleQuiz.changeToggleState(true)
  };

  backPage() {
    history.back();
  }

}
