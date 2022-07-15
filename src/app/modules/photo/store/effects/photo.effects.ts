import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as PhotoActions from '../actions/photo.actions';
import { HttpClient } from '@angular/common/http';
import { FireService } from 'src/app/services/fire.service';
import { Photo } from '../models/photo.model';


@Injectable()
export class PhotoEffects {

  loadPhotos$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(PhotoActions.loadPhotos),
      concatMap(() =>
        this.fire.getCloudFirestore('photo').pipe(
          map((data:any[]) => {
            console.warn(data);
            let photoToStore: Photo[] = [];
            data?.forEach(photo => photoToStore.push({
              id: photo.id,
              ...photo.data()
            }))
            console.warn(photoToStore);
            
            return PhotoActions.loadedPhotos({ photos: [...photoToStore] })
          }),
          catchError(error => of(error)))
      )
    );
  });


  constructor(private actions$: Actions, private http: HttpClient, private fire: FireService) {}
}
