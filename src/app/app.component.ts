import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromMain from './store'
import * as fromPhotoActions from './modules/photo/store/actions/photo.actions'
import * as fromInteriorActions from './modules/interior/store/actions/interior.actions'
import { FireService } from './services/fire.service';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ScrollService } from './services/scroll.service';

//     --pri-color: #C0A687;
//     --sec-color: #B06C57;
//     --tri-color: #8B5848;
//     --cua-color: #60473B;
//     --qui-color: #281209;
declare global {
  interface Window { isSmallScreen: any; }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'desenia-app';
  isSmallScreen: boolean = window.isSmallScreen;
  virtualScroll: number = 0;
  showArticles: boolean = false;
  constructor(private store: Store<fromMain.State>, private fire: FireService, private route: Router, private scrollSv: ScrollService) {
    this.route.navigate(['/']);
    window.scrollTo(0, 0);
    // this.store.dispatch(fromPhotoActions.loadPhotos());
    // this.store.dispatch(fromInteriorActions.loadInteriors());
    window['isSmallScreen'] = window.outerWidth < 600 ? true : false;
    this.isSmallScreen = window.isSmallScreen;
    // if (!this.isSmallScreen) 
    window.addEventListener('scroll', this.scrollSv.splitScreen);
  }

  entryViewport(): void {
    console.warn('ok');
    // this.route.navigate(['/interior']) // Set beginning module to display 
  }



  mobileEnterDesenia(): void {
    // if (this.isSmallScreen) {
    //   this.entryViewport();
    //   let split = document.getElementsByClassName('main-content');
    //   for (let i = 0; i < split.length; i++) {
    //     setTimeout(() => {
    //       (split[i] as HTMLElement).classList.add('rollup');
    //     }, i % 2 == 0 ? (i + i) * 20 : ((i + i - 1) - 1) * 20);
    //   }
    //   setTimeout(() => {
    //     let layers = document.getElementsByClassName('des-layer');
    //     for (let i = 0; i < split.length; i++) {
    //       (layers[i] as HTMLElement) && ((layers[i] as HTMLElement).style.zIndex = '-1')
    //     }
    //   }, 800)

    // }
  }

  goToArticle(article: any): void {
    this.showArticles = true;
    (document.querySelector('#beyond-desenia') as HTMLDialogElement).classList.add('clip-animation');
    setTimeout(() => {
      (document.querySelector('#close-article') as HTMLDialogElement).classList.add('fade-in-article');
      console.warn('mostrar ahora...');
      console.warn(article);
      this.route.navigate(['/interior']); // Set beginning module to display
      setTimeout(() => {

        (document.querySelector('#beyond-desenia') as HTMLDialogElement).classList.remove('clip-animation');
      },3000);
    }, 1000)
  }

  backToFrames(): void {
    (document.querySelector('#close-article') as HTMLDialogElement).classList.add('fade-out-article');
    window.scroll({
      top: 1450,
      behavior: 'auto'
    });
    setTimeout(() => {
      (document.querySelector('#stick-articles') as HTMLDialogElement).classList.add('clip-animation-rev');
      setTimeout(() => {
        (document.querySelector('#stick-articles') as HTMLDialogElement).classList.remove('clip-animation-rev');
        this.route.navigate(['/']); // Set beginning module to display
        this.showArticles = false;
      }, 3000)
    }, 250);
  }
}
