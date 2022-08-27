import { Injectable } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  isSmallScreen: boolean = window.isSmallScreen;
  thresholdValue: number = 1400;
  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Main Intro Animation (vanilla).
  splitScreen(event: Event): void | boolean {
    let thresholdValue = this.thresholdValue;
    // console.warn('win.y: ', window.scrollY);
    (document.querySelector('#draw') as SVGElement).style.strokeDasharray = `${thresholdValue + window.scrollY}px`;

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


  // Horizontal animation for titles & images (GSAP)
  hzScrollProjects(): void {
    gsap.utils.toArray('.draw-section').forEach((section, index) => {
      if (section instanceof HTMLDivElement) {
        const w = (section as HTMLDivElement).querySelectorAll('.wrapper');
        for (let i = 0; i < w.length; i++) {
          // const element = w[i];
          const [x, xEnd] = (i % 2) ? ['100%', (w[i]!.scrollWidth - section.offsetWidth) * -1] : [w[i]!.scrollWidth * -0.2, '100px'];
          gsap.fromTo(w[i], { x }, {
            x: xEnd,
            scrollTrigger: {
              trigger: section,
              scrub: 0.5
            }
          });
        }

      }
    });
  }

}
