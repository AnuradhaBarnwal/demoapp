import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  news: any;
  constructor(private api: ServicesService) {}

  ngOnInit() {
    this.getLatestNews();
  }
  

  getLatestNews() {
    this.api.getNews().subscribe((data) => {
      console.log('data', data.results);
      this.news = data.results;
    });
  }
}
