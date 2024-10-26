import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { NewsService } from '../core/services/news.service';
import * as NewsActions from './news.actions';

@Injectable()
export class NewsEffects {
  loadTopStories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NewsActions.loadTopStories),
      mergeMap(({ section }) =>
        this.newsService.getTopStories(section).pipe(
          map(response => NewsActions.loadTopStoriesSuccess({ stories: response.results })),
          catchError(error => of(NewsActions.loadTopStoriesFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private newsService: NewsService
  ) {}
}