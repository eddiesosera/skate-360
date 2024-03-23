import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  displayQuiz = false;
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
  status: 'failed' | 'passed' | null = null;
  skateboardImg = '../../../../../assets/img/skateboard_quiz.png'

}
