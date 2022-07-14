import { Component, OnInit } from '@angular/core';
import {Quiz} from "../models/Quiz";
import {QuizService} from "../Service/quiz.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  newQuiz= new Quiz();
  messagee!: string;

  // tslint:disable-next-line:variable-name
  constructor(private quiz_service: QuizService, private  router: Router) { }

  ngOnInit(): void {
  }

  addQuiz() {
    this.quiz_service.addQuiz(this.newQuiz).subscribe(can => {
      console.log(can);

    });

    this.router.navigate(['/quiz']).then(() => {
      window.location.reload();
    });
  }

}

