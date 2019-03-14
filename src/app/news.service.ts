import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient ) { }

  getAllNews(){
    return this.http.get( 'https://newsapi.org/v2/top-headlines?country=us&apiKey=4da66184b65e458dbb66a41b55042973');
  }

  getSportsNews(){
    return this.http.get( 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=4da66184b65e458dbb66a41b55042973');
  }

  getBusinessNews(){
    return this.http.get( 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4da66184b65e458dbb66a41b55042973');
  }

  getTechnologyNews(){
    return this.http.get( 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=4da66184b65e458dbb66a41b55042973');
  }
}
