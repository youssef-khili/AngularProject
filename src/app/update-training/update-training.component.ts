import { Component, OnInit } from '@angular/core';
import {Training} from '../models/Training';
import {ActivatedRoute, Router} from '@angular/router';
import {TrainingsService} from '../Service/trainings.service';

@Component({
  selector: 'app-update-training',
  templateUrl: './update-training.component.html',
  styleUrls: ['./update-training.component.css']
})
export class UpdateTrainingComponent implements OnInit {

  currentTraining = new Training();
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              // tslint:disable-next-line:variable-name
              private training_service: TrainingsService) { }

  ngOnInit(): void
  { this.training_service.consulterTraining(this.activatedRoute.snapshot.params.id).subscribe( prod => { this.currentTraining = prod; });
  }


  updateTraining() {
    this.training_service.updateTraining(this.currentTraining).subscribe(() => {
        this.router.navigate(['trainings']);
      }, (error) => { alert('Modifié !'); }
    );
  }


}
