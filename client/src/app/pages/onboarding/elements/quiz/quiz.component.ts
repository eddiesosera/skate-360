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
  @Input() displayQuiz = false;
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
  @Input() userResult: boolean | null = null;

  constructor(private toggleQuiz: ToggleQuizService) { }

  ngOnInit(): void {
    this.toggleQuiz.currentToggleState.subscribe(state => this.display = state)
  }

  hideQuiz() {
    this.displayQuiz = false
    this.toggleQuiz.changeToggleState(false)
  }

  randomQuizId(): number {
    const randonNumber = Math.floor(Math.random() * 4);
    return randonNumber
  }

  submitAnswer(response: any) {
    this.displayQuiz = false;
    // Validation logic
    if (this.selectedAnswer == this.quiz[this.randomQuizId()].answer && this.selectedAnswer !== null) {
      this.userResult = true;
      console.log("Result: ", this.userResult + " as selected answer = " + this.selectedAnswer, ' while answer is: ', this.quiz[this.randomQuizId()].answer)
    } else {
      this.userResult = false
      console.log("Result: ", this.userResult + " as selected answer = " + this.selectedAnswer, ' while answer is: ', this.quiz[this.randomQuizId()].answer)
    }
  }
}
