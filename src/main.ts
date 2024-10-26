import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { App } from './app/app.component';
import { NewsEffects } from './app/store/news.effects';
import { newsReducer } from './app/store/news.reducer';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => 
      import('./app/components/news-list/news-list.component')
        .then(m => m.NewsListComponent)
  },
  {
    path: 'category/:id',
    loadComponent: () => 
      import('./app/components/news-list/news-list.component')
        .then(m => m.NewsListComponent)
  }
];

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideStore({ news: newsReducer }),
    provideEffects([NewsEffects]),
    provideAnimations()
  ]
}).catch(err => console.error(err));