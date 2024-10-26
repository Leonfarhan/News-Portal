import { createAction, props } from '@ngrx/store';

export const loadTopStories = createAction(
  '[News] Load Top Stories',
  props<{ section: string }>()
);

export const loadTopStoriesSuccess = createAction(
  '[News] Load Top Stories Success',
  props<{ stories: any[] }>()
);

export const loadTopStoriesFailure = createAction(
  '[News] Load Top Stories Failure',
  props<{ error: any }>()
);