import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  isSmallScreen: boolean = window.isSmallScreen;
  lastCoordinates = {
    x: 0,
    y: 0
  }
  scrolledAmount:number = 0;
  lastScrollTop: number = 0;

  constructor() {
    this.lastCoordinates.x = window.scrollX;
    this.lastCoordinates.x = window.scrollY;
  }

  splitScreen(event: Event): void | boolean {
    let thresholdValue = 1400;
    // console.warn(window.scrollY);
    if(window.scrollY > thresholdValue * 1.5){
      return
    }
    let split = document.getElementsByClassName('main-content');
    let multiply = 2;
    let lvl = 5;
    if (!this.isSmallScreen) {
      for (let i = 0; i < split.length; i++) {
        // (split[i] as HTMLElement).style.transform = `translateY(${Math.ceil(window.scrollY)}px)`
        switch (i) {
          case 0:
            // (split[i] as HTMLElement).style.transform = `translateY(${Math.ceil(window.scrollY)}px)`;

            (split[i] as HTMLElement).style.transform = `translateX(-${Math.ceil(window.scrollY) * multiply}px)`;
            break;
          case 1:
            // (split[i] as HTMLElement).style.transform = `translateY(${Math.ceil(window.scrollY)}px)`;

            (split[i] as HTMLElement).style.transform = `translateX(${Math.ceil(window.scrollY) * multiply}px)`;
            (split[i] as HTMLElement).style.boxShadow = window.scrollY > 0 ? '0 0 15px -5px black' : 'none';
            break;
          case 2:
            lvl = 5;
            // (split[i] as HTMLElement).style.transform = `translateY(${Math.ceil(window.scrollY - (window.innerHeight * 102) / 100)}px)`;
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.transform = `translateX(-${Math.ceil((window.scrollY - lvl) / 1.4) * multiply}px)`;
            break;
          case 3:
            lvl = 5;
            // (split[i] as HTMLElement).style.transform = `translateY(${Math.ceil(window.scrollY - (window.innerHeight * 102) / 100)}px)`;
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.transform = `translateX(${Math.ceil((window.scrollY - lvl) / 1.4) * multiply}px)`;
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.boxShadow = window.scrollY - 2 > lvl ? '0 0 15px -5px black' : 'none';
            break;
          case 4:
            lvl = 20;
            // (split[i] as HTMLElement).style.transform = `translateY(${Math.ceil(window.scrollY - (window.innerHeight * 204) / 100)}px)`;
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.transform = `translateX(-${Math.ceil((window.scrollY - lvl) / 1.8) * multiply}px)`;
            break;
          case 5:
            lvl = 20;
            // (split[i] as HTMLElement).style.transform = `translateY(${Math.ceil(window.scrollY - (window.innerHeight * 204) / 100)}px)`;
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.transform = `translateX(${Math.ceil((window.scrollY - lvl) / 1.8) * multiply}px)`;
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.boxShadow = window.scrollY - 2 > lvl ? '0 0 15px -5px black' : 'none';
            break;
          case 6:
            lvl = 30;
            // (split[i] as HTMLElement).style.transform = `translateY(${Math.ceil(window.scrollY - (window.innerHeight * 307) / 100)}px)`;
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.transform = `translateX(-${Math.ceil((window.scrollY - lvl) / 2.4) * multiply}px)`;
            break;
          case 7:
            lvl = 30;
            // (split[i] as HTMLElement).style.transform = `translateY(${Math.ceil(window.scrollY - (window.innerHeight * 307) / 100)}px)`;
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.transform = `translateX(${Math.ceil((window.scrollY - lvl) / 2.4) * multiply}px)`;
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.boxShadow = window.scrollY - 2 > lvl ? '0 0 15px -5px black' : 'none';
            break;
          case 8:
            lvl = 37;
            // (split[i] as HTMLElement).style.transform = `translateY(${Math.ceil(window.scrollY - (window.innerHeight * 409) / 100)}px)`;
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.transform = `translateX(-${Math.ceil((window.scrollY - lvl) / 3.5) * multiply}px)`;
            break;
          case 9:
            lvl = 37;
            // (split[i] as HTMLElement).style.transform = `translateY(${Math.ceil(window.scrollY - (window.innerHeight * 409) / 100)}px)`;
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.transform = `translateX(${Math.ceil((window.scrollY - lvl) / 3.5) * multiply}px)`;
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.boxShadow = window.scrollY - 2 > lvl ? '0 0 15px -5px black' : 'none';
            break;
          default:
            break;
        }
      }
    }
    // let keep = document.getElementById('keep-fixed');
    // keep && ((keep as HTMLElement).style.transform = `translateY(${Math.ceil(window.scrollY)}px)`);
    // let beyond = document.getElementById('beyond-desenia');
    // beyond && ((beyond as HTMLElement).style.marginTop = '-500vh');
    // beyond && ((beyond as HTMLElement).style.transform = `translateY(${Math.ceil(window.scrollY)}px)`);
  }
}