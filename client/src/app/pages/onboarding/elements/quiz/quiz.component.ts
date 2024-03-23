import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  @Input() displayQuiz = false;
  quiz = [
    {
      id: 'board',
      question: 'Which part of the skateboard is the board',
      options: ['A', 'B', 'C', 'D'],
      content: '',
      answer: 'A'
    },
    {
      id: 'truck',
      question: 'Which part of the skateboard is the truck',
      options: ['A', 'B', 'C', 'D'],
      content: '',
      answer: 'B'
    },
    {
      id: 'wheel',
      question: 'Which part of the skateboard is the truck',
      options: ['A', 'B', 'C', 'D'],
      content: '',
      answer: 'C'
    },
    {
      id: 'bearing',
      question: 'Which part of the skateboard is the truck',
      options: ['A', 'B', 'C', 'D'],
      content: '',
      answer: 'D'
    }
  ];
  quizOption = ['A', 'B', 'C', 'D']
  status: 'failed' | 'passed' | null = null;
  skateboardImg = '../../../../../assets/img/skateboard_quiz.png';

  hideQuiz() {
    this.displayQuiz = false
  }


}
