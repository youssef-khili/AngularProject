import { Component, OnInit } from '@angular/core';
import {Training} from '../models/Training';
import {TrainingsService} from '../Service/trainings.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.css']
})
export class AddTrainingComponent implements OnInit {

  newTraining = new Training();
  message!: string;

  // tslint:disable-next-line:variable-name
  constructor(private private_service: TrainingsService, private  router: Router) { }

  ngOnInit(): void {
  }

  addTraining() {
    this.private_service.addTraining(this.newTraining).subscribe(can => {
      console.log(can);

    });

    this.router.navigate(['/quiz']).then(() => {
      window.location.reload();
    });
  }

}
