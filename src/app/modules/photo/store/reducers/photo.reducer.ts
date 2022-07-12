import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Photo } from '../models/photo.model';
import * as PhotoActions from '../actions/photo.actions';

export const photoesFeatureKey = 'photoes';

export interface State extends EntityState<Photo> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Photo> = createEntityAdapter<Photo>({
  sortComparer: false,
  selectId: (data:Photo) => data?.id
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(PhotoActions.loadPhotos,
    (state, action) => state
  ),
  on(PhotoActions.addPhoto,
    (state, action) => adapter.addOne(action.photo, state)
  ),
  on(PhotoActions.upsertPhoto,
    (state, action) => adapter.upsertOne(action.photo, state)
  ),
  on(PhotoActions.addPhotos,
    (state, action) => adapter.addMany(action.photos, state)
  ),
  on(PhotoActions.upsertPhotos,
    (state, action) => adapter.upsertMany(action.photos, state)
  ),
  on(PhotoActions.updatePhoto,
    (state, action) => adapter.updateOne(action.photo, state)
  ),
  on(PhotoActions.updatePhotos,
    (state, action) => adapter.updateMany(action.photos, state)
  ),
  on(PhotoActions.deletePhoto,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(PhotoActions.deletePhotos,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(PhotoActions.loadedPhotos,
    (state, action) => adapter.setAll(action.photos, state)
  ),
  on(PhotoActions.clearPhotos,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
