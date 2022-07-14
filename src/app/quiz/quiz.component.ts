import { Component, OnInit } from '@angular/core';
import {Quiz} from '../models/Quiz';
import {Router} from '@angular/router';
import {QuizService} from '../Service/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz!: Quiz[];
  // tslint:disable-next-line:variable-name
  constructor(private quiz_service: QuizService, private  router: Router) { }

  ngOnInit(): void {
    this.quiz_service.getQuiz().subscribe(data => {
      console.log(data);
      this.quiz = data;
    }); }

  DeleteQuiz(q: Quiz)
  {
    console.log('deleted' + q);
    const conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.quiz_service.DeleteQuiz(q.iddQuiz).subscribe(() => {
        console.log('Training deleted');
        this.SupprimerQuizDuTableau(q);
      });
    }
  }

  SupprimerQuizDuTableau(quiz: Quiz) {
    this.quiz.forEach((cur, index) => {
      if (quiz.iddQuiz === cur.iddQuiz) {
        this.quiz.splice(index, 1);
      }
    });
  }

}
