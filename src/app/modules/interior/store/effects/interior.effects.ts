import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as InteriorActions from '../actions/interior.actions';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class InteriorEffects {

  loadInteriors$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(InteriorActions.loadInteriors),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.http.get('https://api.imgflip.com/get_memes').pipe(
          map((data: any) => InteriorActions.loadedInteriors({ interiors: data?.data?.memes })),
          catchError(error => of( error )))
      )
    );
  });


  constructor(private actions$: Actions, private http: HttpClient) {}
}
