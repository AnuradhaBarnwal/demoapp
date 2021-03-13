import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  score: any;

  constructor(private api2: ServicesService) { }

  ngOnInit() {
    this.getLatestScore();
  }

  getLatestScore() {
    this.api2.getScore().subscribe((data) => {
      console.log('data', data.data);
      this.score = data.data;
    })
  }

}
