import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  url =
    'https://newsapi.org/v2/everything?q=Apple&from=2021-03-10&sortBy=popularity&apiKey=5c1824358a744e86aa599e73bdc2ac5f';
    url2= 'https://cricapi.com/api/cricket?apikey=PW77FKNtF1UwrIFVeZH1tV7MY603';
  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get<any>(this.url);
  }
  
  getScore() {
    return this.http.get<any>(this.url2)
  }
}
