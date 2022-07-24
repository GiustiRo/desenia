import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromMain from './store'
import * as fromPhotoActions from './modules/photo/store/actions/photo.actions'
import * as fromInteriorActions from './modules/interior/store/actions/interior.actions'
import { FireService } from './services/fire.service';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

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
  constructor(private store: Store<fromMain.State>, private fire: FireService, private route: Router) {
    this.route.navigate(['/']);
    window.scrollTo(0,0)
    // this.store.dispatch(fromPhotoActions.loadPhotos());
    // this.store.dispatch(fromInteriorActions.loadInteriors());
    window['isSmallScreen'] = window.outerWidth < 600 ? true : false;
    this.isSmallScreen = window.isSmallScreen;
    if (!this.isSmallScreen) document.addEventListener('scroll', this.splitScreen);
  }

  entryViewport(): void {
    console.warn('ok');
    this.route.navigate(['/interior']) // Set beginning module to display 
    
  }

  splitScreen(event: Event): void {
    
    console.warn(window.scrollY);
    let split = document.getElementsByClassName('main-content');
    let multiply = 20;
    let lvl = 5;
    if (!this.isSmallScreen) {
      for (let i = 0; i < split.length; i++) {
        if (i % 2 != 0) {
        }
        (split[i] as HTMLElement).style.transform = `translateY(${Math.ceil(window.scrollY)}px)`
        switch (i) {
          case 0:
            (split[i] as HTMLElement).style.transform = (split[i] as HTMLElement).style.transform + `translateX(-${Math.ceil(window.scrollY) * multiply}px)`;
            break;
          case 1:
            (split[i] as HTMLElement).style.transform = (split[i] as HTMLElement).style.transform + `translateX(${Math.ceil(window.scrollY) * multiply}px)`;
            (split[i] as HTMLElement).style.boxShadow = window.scrollY > 0 ? '0 0 15px -5px black' : 'none';
            break;
          case 2:
            lvl = 5
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.transform = (split[i] as HTMLElement).style.transform + `translateX(-${Math.ceil((window.scrollY - lvl) / 1.5) * multiply}px)`;
            break;
          case 3:
            lvl = 5
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.transform = (split[i] as HTMLElement).style.transform + `translateX(${Math.ceil((window.scrollY - lvl) / 1.5) * multiply}px)`;
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.boxShadow = window.scrollY - 2 > lvl ? '0 0 15px -5px black' : 'none';
            break;
          case 4:
            lvl = 20
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.transform = (split[i] as HTMLElement).style.transform + `translateX(-${Math.ceil((window.scrollY - lvl) / 1.8) * multiply}px)`;
            break;
          case 5:
            lvl = 20
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.transform = (split[i] as HTMLElement).style.transform + `translateX(${Math.ceil((window.scrollY - lvl) / 1.8) * multiply}px)`;
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.boxShadow = window.scrollY - 2 > lvl ? '0 0 15px -5px black' : 'none';
            break;
          case 6:
            lvl = 30
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.transform = (split[i] as HTMLElement).style.transform + `translateX(-${Math.ceil((window.scrollY - lvl) / 2) * multiply}px)`;
            break;
          case 7:
            lvl = 30
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.transform = (split[i] as HTMLElement).style.transform + `translateX(${Math.ceil((window.scrollY - lvl) / 2) * multiply}px)`;
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.boxShadow = window.scrollY - 2 > lvl ? '0 0 15px -5px black' : 'none';
            break;
          case 8:
            lvl = 37
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.transform = (split[i] as HTMLElement).style.transform + `translateX(-${Math.ceil((window.scrollY - lvl) / 2.4) * multiply}px)`;
            break;
          case 9:
            lvl = 37
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.transform = (split[i] as HTMLElement).style.transform + `translateX(${Math.ceil((window.scrollY - lvl) / 2.4) * multiply}px)`;
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.boxShadow = window.scrollY - 2 > lvl ? '0 0 15px -5px black' : 'none';
            break;
          default:
            break;
        }
      }
    }
    let keep = document.getElementById('keep-fixed');
    keep && ((keep as HTMLElement).style.transform = `translateY(${Math.ceil(window.scrollY)}px)`);
    let beyond = document.getElementById('beyond-desenia');
    beyond && ((beyond as HTMLElement).style.marginTop = '-500vh');
    // beyond && ((beyond as HTMLElement).style.transform = `translateY(${Math.ceil(window.scrollY)}px)`);
  }

  mobileEnterDesenia(): void {
    if (this.isSmallScreen) {
      this.entryViewport();
      let split = document.getElementsByClassName('main-content');
      for (let i = 0; i < split.length; i++) {
        setTimeout(() => {
          (split[i] as HTMLElement).classList.add('rollup');
        },i % 2 == 0 ? (i+i) * 20 : ((i+i-1)-1) * 20); 
      }
      setTimeout(() => {
        let layers = document.getElementsByClassName('des-layer');
        for (let i = 0; i < split.length; i++) {
          (layers[i] as HTMLElement) && ((layers[i] as HTMLElement).style.zIndex = '-1')
        }
      },800)
      
    }
  }
}
