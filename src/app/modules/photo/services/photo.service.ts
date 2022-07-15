import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { FireService } from 'src/app/services/fire.service';
import * as fromMain from '../../../store';
import * as fromActionsPhoto from '../store/actions/photo.actions'
import { Photo } from '../store/models/photo.model';

@Injectable()
export class PhotoService {

  constructor(private store: Store<fromMain.State>, private fire: FireService) { }

  getPhotos(): void { // trigger effect > http call.
    this.store.dispatch(fromActionsPhoto.loadPhotos());
  }
}
