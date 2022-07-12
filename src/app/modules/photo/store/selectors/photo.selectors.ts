import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPhoto from '../reducers/photo.reducer';

export const selectPhotoState = createFeatureSelector<fromPhoto.State>(
  fromPhoto.photoesFeatureKey
);
