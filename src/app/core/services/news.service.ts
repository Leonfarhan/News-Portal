import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private readonly API_KEY = 'ftyEdRGBdqIr6BwOgMdhkGu5IVUwKE6b';
  private readonly BASE_URL = 'https://api.nytimes.com/svc';

  constructor(private http: HttpClient) {}

  getTopStories(section: string = 'home'): Observable<any> {
    return this.http.get(
      `${this.BASE_URL}/topstories/v2/${section}.json?api-key=${this.API_KEY}`
    );
  }

  searchArticles(query: string): Observable<any> {
    return this.http.get(
      `${this.BASE_URL}/search/v2/articlesearch.json?q=${query}&api-key=${this.API_KEY}`
    );
  }
}