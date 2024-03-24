import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ButtonComponent } from '../../../../components/inputs/button/button.component';
import { ToggleQuizService } from '../../../../services/page/onboarding/toggle-quiz.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {
  display!: boolean;
  quiz = [
    {
      id: 0,
      question: 'Which part of the skateboard is the `board`?',
      options: ['A', 'B', 'C', 'D'],
      content: '',
      answer: 'A'
    },
    {
      id: 1,
      question: 'Which part of the skateboard is the `truck`?',
      options: ['A', 'B', 'C', 'D'],
      content: '',
      answer: 'B'
    },
    {
      id: 2,
      question: 'Which part of the skateboard is the `wheel`?',
      options: ['A', 'B', 'C', 'D'],
      content: '',
      answer: 'C'
    },
    {
      id: 3,
      question: 'Which part of the skateboard is the `bearing`?',
      options: ['A', 'B', 'C', 'D'],
      content: '',
      answer: 'D'
    }
  ];
  quizOption = ['A', 'B', 'C', 'D']
  skateboardImg = '../../../../../assets/img/skateboard_quiz.png';
  selectedAnswer: string | null = null;
  userResult!: boolean | null;
  randomQuizId = Math.floor(Math.random() * 4);

  constructor(private quizService: ToggleQuizService) { }

  ngOnInit(): void {
    this.quizService.currentToggleState.subscribe(state => this.display = state)
    this.quizService.userResult.subscribe(result => this.userResult = result)
  }

  hideQuiz() {
    this.quizService.changeToggleState(false)
  }

  submitAnswer() {
    this.quizService.changeToggleState(false)

    // Validation logic
    if (this.selectedAnswer == this.quiz[this.randomQuizId].answer && this.selectedAnswer !== null) {
      this.quizService.assignUserResult(true)
      console.log("Result: ", this.userResult + " as selected answer = " + this.selectedAnswer, ' while answer is: ', this.quiz[this.randomQuizId].answer)
    } else {
      this.quizService.assignUserResult(false)
      console.log("Result: ", this.userResult + " as selected answer = " + this.selectedAnswer, ' while answer is: ', this.quiz[this.randomQuizId].answer)
    }

    // Reset selected answer &Reload quiz number
    setTimeout(() => {
      this.selectedAnswer = null;
      this.randomQuizId = Math.floor(Math.random() * 4);
    }, 500)
  }
}
