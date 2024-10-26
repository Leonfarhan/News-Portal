import { createReducer, on } from '@ngrx/store';
import * as NewsActions from './news.actions';

export interface NewsState {
  stories: any[];
  loading: boolean;
  error: any;
}

export const initialState: NewsState = {
  stories: [],
  loading: false,
  error: null
};

export const newsReducer = createReducer(
  initialState,
  on(NewsActions.loadTopStories, state => ({
    ...state,
    loading: true
  })),
  on(NewsActions.loadTopStoriesSuccess, (state, { stories }) => ({
    ...state,
    stories,
    loading: false
  })),
  on(NewsActions.loadTopStoriesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);