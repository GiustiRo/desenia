import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as InteriorActions from '../actions/interior.actions';
import { HttpClient } from '@angular/common/http';
import { FireService } from 'src/app/services/fire.service';
import { Interior } from '../models/interior.model';


@Injectable()
export class InteriorEffects {

  loadInteriors$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(InteriorActions.loadInteriors),
      concatMap(() =>
      this.fire.getCloudFirestore('interior').pipe(
        map((data:any[]) => {
          console.warn(data);
          let interiorsToStore: Interior[] = [];
          data?.forEach(interior => interiorsToStore.push({
            id: interior.id,
            ...interior.data()
          }))
          console.warn(interiorsToStore);
          return InteriorActions.loadedInteriors({ interiors: [...interiorsToStore] })
        }),
          catchError(error => of( error )))
      )
    );
  });


  constructor(private actions$: Actions, private http: HttpClient, private fire: FireService) {}
}
