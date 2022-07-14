import { Component, OnInit } from '@angular/core';
import {Training} from '../models/Training';
import {TrainingsService} from '../Service/trainings.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  constructor(private private_service: TrainingsService, private  router: Router) { }

  trainings!: Training[];
  trainingName!: any;
  key = 'idTraining';
  reverse = false;
  p: number = 1;

  ngOnInit(): void {
    this.private_service.getUsersName().subscribe(data => {
      console.log(data);
      this.trainings = data;
    });
  }
  DeleteTraining(t: Training)
  {
    console.log('deleted' + t);
    const conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.private_service.DeleteTraining(t.idTraining).subscribe(() => {
        console.log('Training deleted');
        this.SupprimerTrainingDuTableau(t);
      });
    }
  }

  SupprimerTrainingDuTableau(training: Training) {
    this.trainings.forEach((cur, index) => {
      if (training.idTraining === cur.idTraining) {
        this.trainings.splice(index, 1);
      }
    });
  }

  Search(){
    // tslint:disable-next-line:triple-equals
    if (this.trainingName == ''){
      this.ngOnInit();
    }else{
      this.trainings = this.trainings.filter(res => {
        return res.trainingName.toLocaleLowerCase().match(this.trainingName.toLocaleLowerCase());
      });
    }

  }
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;

  }


}

