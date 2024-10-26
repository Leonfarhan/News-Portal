import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { loadTopStories } from '../../store/news.actions';
import { Observable } from 'rxjs';
import { NewsState } from '../../store/news.reducer';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ],
  template: `
    <div class="container mx-auto px-4">
      <div *ngIf="loading$ | async" class="text-center py-8">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
      </div>

      <div *ngIf="error$ | async as error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong class="font-bold">Error!</strong>
        <span class="block sm:inline"> {{ error?.message || 'Failed to load stories' }}</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" @listAnimation>
        <div *ngFor="let story of stories$ | async" 
             class="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
          <img *ngIf="story.multimedia?.[0]?.url" 
               [src]="story.multimedia[0].url" 
               [alt]="story.title"
               class="w-full h-48 object-cover">
          <div class="p-6">
            <h2 class="text-xl font-bold mb-2 dark:text-white">{{story.title}}</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{story.abstract}}</p>
            <a [href]="story.url" 
               target="_blank"
               class="text-blue-500 hover:text-blue-700 dark:text-blue-400">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class NewsListComponent implements OnInit {
  stories$: Observable<any[]> = this.store.select(state => state.news.stories);
  loading$: Observable<boolean> = this.store.select(state => state.news.loading);
  error$: Observable<any> = this.store.select(state => state.news.error);

  constructor(
    private store: Store<{ news: NewsState }>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const section = params['id'] || 'home';
      this.store.dispatch(loadTopStories({ section }));
    });
  }
}