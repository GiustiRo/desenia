import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Interior } from '../models/interior.model';

export const loadInteriors = createAction(
  '[Interior/API] Load Interiors'
);
export const loadedInteriors = createAction(
  '[Interior/API] Loaded Interiors!', 
  props<{ interiors: Interior[] }>()
);

export const addInterior = createAction(
  '[Interior/API] Add Interior',
  props<{ interior: Interior }>()
);

export const upsertInterior = createAction(
  '[Interior/API] Upsert Interior',
  props<{ interior: Interior }>()
);

export const addInteriors = createAction(
  '[Interior/API] Add Interiors',
  props<{ interiors: Interior[] }>()
);

export const upsertInteriors = createAction(
  '[Interior/API] Upsert Interiors',
  props<{ interiors: Interior[] }>()
);

export const updateInterior = createAction(
  '[Interior/API] Update Interior',
  props<{ interior: Update<Interior> }>()
);

export const updateInteriors = createAction(
  '[Interior/API] Update Interiors',
  props<{ interiors: Update<Interior>[] }>()
);

export const deleteInterior = createAction(
  '[Interior/API] Delete Interior',
  props<{ id: string }>()
);

export const deleteInteriors = createAction(
  '[Interior/API] Delete Interiors',
  props<{ ids: string[] }>()
);

export const clearInteriors = createAction(
  '[Interior/API] Clear Interiors'
);
