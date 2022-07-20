import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromMain from './store'
import * as fromPhotoActions from './modules/photo/store/actions/photo.actions'
import * as fromInteriorActions from './modules/interior/store/actions/interior.actions'
import { FireService } from './services/fire.service';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';

//     --pri-color: #C0A687;
//     --sec-color: #B06C57;
//     --tri-color: #8B5848;
//     --cua-color: #60473B;
//     --qui-color: #281209;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'desenia-app';
  
  constructor(private store: Store<fromMain.State>, private fire: FireService) {
    this.store.dispatch(fromPhotoActions.loadPhotos());
    // this.store.dispatch(fromInteriorActions.loadInteriors());
    document.addEventListener('scroll', this.splitScreen);
  }
  splitScreen(event: Event): void {
    let split = document.getElementsByClassName('main-content');
    (split[0] as HTMLElement).style.transform = `translateX(-${Math.ceil(window.scrollY) * 20}px) translateY(${Math.ceil(window.scrollY)}px)`;
    (split[1] as HTMLElement).style.transform = `translateX(${Math.ceil(window.scrollY) * 20}px) translateY(${Math.ceil(window.scrollY)}px)`;
    (split[1] as HTMLElement).style.boxShadow = window.scrollY > 0 ? '0 0 15px -5px black' : 'none';
    let beyond = document.getElementById('keep-fixed');
    (beyond as HTMLElement).style.transform = `translateY(${Math.ceil(window.scrollY)}px)`;
  }

}
