import { Component, OnInit } from '@angular/core';
import {Quiz} from '../models/Quiz';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizService} from '../Service/quiz.service';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  currentQuiz = new Quiz();
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              // tslint:disable-next-line:variable-name
              private quiz_service: QuizService) { }

  ngOnInit(): void
  {
    this.quiz_service.consulterTraining(this.activatedRoute.snapshot.params.id).subscribe( prod => { this.currentQuiz = prod; });
  }

  updateQuiz() {
    this.quiz_service.updateQuiz(this.currentQuiz).subscribe(() => {
        this.router.navigate(['quiz']);
      }, (error) => { alert('Problème lors de la modification !'); }
    );
  }

}
