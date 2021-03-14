import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  url =
    'https://api.nytimes.com/svc/news/v3/content/nyt/business.json?api-key=nsc5BEJcLaDd0GpgAK4pJsOd7MOivcvL';
    url2= 'https://cricapi.com/api/cricket?apikey=PW77FKNtF1UwrIFVeZH1tV7MY603';
  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get<any>(this.url);
  }
  
  getScore() {
    return this.http.get<any>(this.url2)
  }
}
