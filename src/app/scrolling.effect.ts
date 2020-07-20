import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap, debounceTime } from 'rxjs/operators';
import { ActionTypes } from './infinite-scroll.actions';
import { ScrollingService } from './service/scrolling.service';

@Injectable()
export class ScrollingEffects {
  constructor(
    private actions$: Actions,
    private scrollingService: ScrollingService
  ) { }

  @Effect()
  loadTransaction$ = this.actions$.pipe(
    ofType(ActionTypes.LoadItems),
    debounceTime(400),
    mergeMap(({ payload: { cursor, limit } }) =>
      this.scrollingService.getData(cursor, limit).pipe(
        map(trans => {
          return { type: ActionTypes.LoadSuccess, payload: trans };
        }),
        catchError(() => EMPTY)
      )
    )
  );
}
