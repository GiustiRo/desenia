import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromPhoto from '../modules/photo/store/reducers/photo.reducer';
import * as fromInterior from '../modules/interior/store/reducers/interior.reducer';


export interface State {

  [fromPhoto.photoesFeatureKey]: fromPhoto.State;
  [fromInterior.interiorsFeatureKey]: fromInterior.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromPhoto.photoesFeatureKey]: fromPhoto.reducer,
  [fromInterior.interiorsFeatureKey]: fromInterior.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
