import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromMain from './store'
import * as fromPhotoActions from './modules/photo/store/actions/photo.actions'
import * as fromInteriorActions from './modules/interior/store/actions/interior.actions'
import { FireService } from './services/fire.service';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';
// import Scrollbar from 'smooth-scrollbar';

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
export class AppComponent implements OnInit, AfterViewInit {
  title = 'desenia-app';
  lightMode: boolean = true;
  items = [
    {
      img_light: '../assets/img/interiores/cabaña/portada_light_t.jpg',
      img_night: '../assets/img/interiores/cabaña/portada_night_t.jpg'
    }
  ]

  @ViewChild('blurBackground') blurBackground!: ElementRef<HTMLDivElement>;

  constructor(private store: Store<fromMain.State>, private fire: FireService) {
    this.store.dispatch(fromPhotoActions.loadPhotos());
    // this.store.dispatch(fromInteriorActions.loadInteriors());
    document.addEventListener('scroll', this.splitScreen);
  }
  splitScreen(event: Event): void {
    let split = document.getElementsByClassName('main-content');
    (split[0] as HTMLElement).style.transform = `translateX(-${Math.ceil(window.scrollY) * 10}px) translateY(${Math.ceil(window.scrollY)}px)`;
    (split[1] as HTMLElement).style.transform = `translateX(${Math.ceil(window.scrollY) * 10}px) translateY(${Math.ceil(window.scrollY)}px)`;
    (split[1] as HTMLElement).style.boxShadow = window.scrollY > 0 ? '0 0 15px -5px black' : 'none';
    let beyond = document.getElementById('keep-fixed');
    (beyond as HTMLElement).style.transform = `translateY(${Math.ceil(window.scrollY)}px)`;
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.blurBackground.nativeElement.style.backgroundImage = `url(${this.items[0].img_light})`
  }

  switchLightMode(): void {
    this.lightMode = !this.lightMode;
    if (this.lightMode) {
      this.blurBackground.nativeElement.style.filter = `grayscale(0.5) blur(20px) brightness(0.6)`
      document.documentElement.style.setProperty('--qui-color', '#191010');
      document.documentElement.style.setProperty('--white', 'white');
    } else {
      this.blurBackground.nativeElement.style.filter = `grayscale(0.5) blur(20px) brightness(0.1)`
      document.documentElement.style.setProperty('--qui-color', 'white');
      document.documentElement.style.setProperty('--white', '#191010');
    }
  }

}
