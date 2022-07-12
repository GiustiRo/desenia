import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Interior } from '../models/interior.model';
import * as InteriorActions from '../actions/interior.actions';

export const interiorsFeatureKey = 'interiors';

export interface State extends EntityState<Interior> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Interior> = createEntityAdapter<Interior>({
  sortComparer: false,
  selectId: (data:Interior) => data?.id
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(InteriorActions.loadInteriors,
    (state, action) => state
  ),
  on(InteriorActions.addInterior,
    (state, action) => adapter.addOne(action.interior, state)
  ),
  on(InteriorActions.upsertInterior,
    (state, action) => adapter.upsertOne(action.interior, state)
  ),
  on(InteriorActions.addInteriors,
    (state, action) => adapter.addMany(action.interiors, state)
  ),
  on(InteriorActions.upsertInteriors,
    (state, action) => adapter.upsertMany(action.interiors, state)
  ),
  on(InteriorActions.updateInterior,
    (state, action) => adapter.updateOne(action.interior, state)
  ),
  on(InteriorActions.updateInteriors,
    (state, action) => adapter.updateMany(action.interiors, state)
  ),
  on(InteriorActions.deleteInterior,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(InteriorActions.deleteInteriors,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(InteriorActions.loadedInteriors,
    (state, action) => adapter.setAll(action.interiors, state)
  ),
  on(InteriorActions.clearInteriors,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
