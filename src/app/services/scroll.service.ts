import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  isSmallScreen: boolean = window.isSmallScreen;

  constructor() {}

  splitScreen(event: Event): void | boolean {
    let thresholdValue = 1400;
    console.warn('w.y: ', window.scrollY);
    
    if(window.scrollY > thresholdValue * 1.5){
      return
    }
    let split = document.getElementsByClassName('main-content');
    let multiply = 2;
    let lvl = 5;
    if (!this.isSmallScreen) {
      for (let i = 0; i < split.length; i++) {
        switch (i) {
          case 0:
            (split[i] as HTMLElement).style.transform = `translateX(-${Math.ceil(window.scrollY) * multiply}px)`;
            break;
          case 1:
            (split[i] as HTMLElement).style.transform = `translateX(${Math.ceil(window.scrollY) * multiply}px)`;
            (split[i] as HTMLElement).style.boxShadow = window.scrollY > 0 ? '0 0 15px -5px black' : 'none';
            break;
          case 2:
            lvl = 5;
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.transform = `translateX(-${Math.ceil((window.scrollY - lvl) / 1.4) * multiply}px)`;
            break;
          case 3:
            lvl = 5;
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.transform = `translateX(${Math.ceil((window.scrollY - lvl) / 1.4) * multiply}px)`;
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.boxShadow = window.scrollY - 2 > lvl ? '0 0 15px -5px black' : 'none';
            break;
          case 4:
            lvl = 20;
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.transform = `translateX(-${Math.ceil((window.scrollY - lvl) / 1.8) * multiply}px)`;
            break;
          case 5:
            lvl = 20;
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.transform = `translateX(${Math.ceil((window.scrollY - lvl) / 1.8) * multiply}px)`;
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.boxShadow = window.scrollY - 2 > lvl ? '0 0 15px -5px black' : 'none';
            break;
          case 6:
            lvl = 30;
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.transform = `translateX(-${Math.ceil((window.scrollY - lvl) / 2.4) * multiply}px)`;
            break;
          case 7:
            lvl = 30;
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.transform = `translateX(${Math.ceil((window.scrollY - lvl) / 2.4) * multiply}px)`;
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.boxShadow = window.scrollY - 2 > lvl ? '0 0 15px -5px black' : 'none';
            break;
          case 8:
            lvl = 37;
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.transform = `translateX(-${Math.ceil((window.scrollY - lvl) / 3.5) * multiply}px)`;
            break;
          case 9:
            lvl = 37;
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.transform = `translateX(${Math.ceil((window.scrollY - lvl) / 3.5) * multiply}px)`;
            if (window.scrollY > lvl) (split[i] as HTMLElement).style.boxShadow = window.scrollY - 2 > lvl ? '0 0 15px -5px black' : 'none';
            break;
        }
      }
    }
  }
}
