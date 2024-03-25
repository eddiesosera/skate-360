import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../components/inputs/button/button.component';
import { QuizComponent } from './elements/quiz/quiz.component';
import { ToggleQuizService } from '../../services/page/onboarding/toggle-quiz.service';
import { UserService } from '../../services/data/user.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule, QuizComponent, ButtonComponent],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.css'
})
export class OnboardingComponent implements OnInit {
  // UI variables
  bgImg = '../../../assets/img/login_bg.png';
  isQuizDisplayed!: boolean;
  userResult: 'true' | 'false' | 'null' = 'null';
  resultFeedback!: string;

  // DATA variables
  userForm = {
    email: '',
    password: ''
  }

  constructor(private toggleQuiz: ToggleQuizService, private userService: UserService) { }

  ngOnInit(): void {

    // UI Logic
    this.toggleQuiz.currentToggleState.subscribe(state => this.isQuizDisplayed = state)
    this.toggleQuiz.userResult.subscribe(result => this.userResult = result)
    console.log(this.userResult, ' user result');

    if (this.userResult === "true") {
      this.resultFeedback = "Verification Successful!"
    } else if (this.userResult === "false") {
      this.resultFeedback = "Verification failed, Try again.!"
    }

    // DATA Logic
    this.loginUser()
  }

  // UI Logic

  displayQuiz() {
    this.toggleQuiz.changeToggleState(true)
  };

  backPage() {
    history.back();
  }

  // DATA Logic
  updateInput(event: any, field: 'email' | 'password') {
    if (field === 'email') { this.userForm.email = event.target.value }
    if (field === 'password') { this.userForm.password = event.target.value }
    // console.log(this.userForm)
  }
  loginUser() {
    console.log(this.userForm)
    this.userService.login(this.userForm).subscribe(user => {
      sessionStorage.setItem('loggedInUser', JSON.stringify(user))
      console.log(user)
    })
  }

}
