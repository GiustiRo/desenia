import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInterior from '../reducers/interior.reducer';

export const selectInteriorState = createFeatureSelector<fromInterior.State>(
  fromInterior.interiorsFeatureKey
);
export const selectInteriorAll = createSelector(
  selectInteriorState,
  fromInterior.selectAll
);