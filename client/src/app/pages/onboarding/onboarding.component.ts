import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { ButtonComponent } from '../../components/inputs/button/button.component';
import { QuizComponent } from './elements/quiz/quiz.component';
import { ToggleQuizService } from '../../services/page/onboarding/toggle-quiz.service';
import { UserService } from '../../services/data/user.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    ReactiveFormsModule,
    QuizComponent,
    ButtonComponent,
  ],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.css',
})
export class OnboardingComponent implements OnInit {
  // UI variables
  bgImg = '../../../assets/img/login_bg.png';
  isQuizDisplayed!: boolean;
  userResult: 'true' | 'false' | 'null' = 'null';
  resultFeedback!: string;
  init = 0;

  // DATA variables
  userForm = {
    email: '',
    password: '',
  };
  loginMessage: any = '';

  constructor(
    private toggleQuiz: ToggleQuizService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // UI Logic
    this.toggleQuiz.currentToggleState.subscribe(
      (state) => (this.isQuizDisplayed = state)
    );
    this.toggleQuiz.userResult.subscribe(
      (result) => (this.userResult = result)
    );

    if (this.userResult === 'true') {
      this.resultFeedback = 'Verification Successful!';
    } else if (this.userResult === 'false') {
      this.resultFeedback = 'Verification failed, Try again.!';
    }

    // DATA Logic
    this.loginUser();
  }

  // UI Logic
  displayQuiz() {
    this.toggleQuiz.changeToggleState(true);
  }

  backPage() {
    history.back();
  }

  // DATA Logic
  updateInput(event: any, field: 'email' | 'password') {
    if (field === 'email') {
      this.userForm.email = event.target.value;
    }
    if (field === 'password') {
      this.userForm.password = event.target.value;
    }
  }

  loginUser() {
    this.init = this.init + 1;
    if (this.userResult === 'true') {
      this.userService.login(this.userForm).subscribe((user) => {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        localStorage.setItem('isLoggedIn', 'true');
        this.loginMessage = user.message;

        if (user.message === 'Success') {
          this.router.navigate(['/']);
        }
      });
    } else if (this.userResult === 'false') {
      alert('Yo bro, Try the verification test again.');
    } else if (this.userResult === 'null' && this.init > 1) {
      alert('Get skate360 verified to be able to login.');
    }
  }
}
