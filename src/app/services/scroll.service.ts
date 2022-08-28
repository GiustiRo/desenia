import { Injectable } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  isSmallScreen: boolean = window.isSmallScreen;
  thresholdValue: number = 1400;
  isAnimating: boolean = false;
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


  transitionPage(): void {
    const overlayPath = document.querySelector('.overlay__path');
    const pageTransitionOpen = document.querySelectorAll('.p-goto');

    const openMenu = () => {

      if (this.isAnimating) return;
      this.isAnimating = true;
      gsap.timeline({
        onStart: () => {
          (document.querySelector('.overlay') as HTMLElement).style.zIndex = '9999';
        },
        onComplete: () => {
          this.isAnimating = false;
          (document.querySelector('.overlay') as HTMLElement).style.zIndex = '0';
        }
      })
        .set(overlayPath, {
          attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
        })
        .to(overlayPath, {
          duration: 0.8,
          ease: 'power4.in',
          attr: { d: 'M 0 100 V 50 Q 50 0 100 50 V 100 z' }
        }, 0)
        .to(overlayPath, {
          duration: 0.3,
          ease: 'power2',
          attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' },
          onComplete: () => {
            (document.documentElement as HTMLHtmlElement).style.overflowY = 'hidden';
            (document.querySelector('#overlay_projects') as HTMLElement).classList.remove('op_inactive');
            (document.querySelector('#overlay_projects') as HTMLElement).classList.add('op_active');
            // menuWrap.classList.add('menu-wrap--open');
          }
        })
        // title elements
        // .to([title.main, title.sub], {
        //   duration: 0.8,
        //   ease: 'power3.in',
        //   y: -200,
        //   stagger: 0.05
        // }, 0.2)

        // now reveal
        // .set(menuItems, {
        //   opacity: 0
        // })
        .set(overlayPath, {
          attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' }
        })
        .to(overlayPath, {
          duration: 0.3,
          ease: 'power2.in',
          attr: { d: 'M 0 0 V 50 Q 50 0 100 50 V 0 z' }
        })
        .to(overlayPath, {
          duration: 0.8,
          ease: 'power4',
          attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' }
        })
      // menu items translate animation
      // .to(menuItems, {
      //   duration: 1.1,
      //   ease: 'power4',
      //   startAt: { y: 150 },
      //   y: 0,
      //   opacity: 1,
      //   stagger: 0.05
      // }, '>-=1.1');

    }

    // click on menu button
    pageTransitionOpen.forEach((g) => {
      console.warn('ok?');

      g.addEventListener('click', openMenu);
    })
    // click on close menu button
    // closeMenuCtrl.addEventListener('click', closeMenu);
  }

  transitionPageBack(): void {
    const overlayPath = document.querySelector('.overlay__path');
    const pageTransitionOpen = document.querySelectorAll('.p-goto');
    // closes the menu
    const closeMenu = () => {

      if (this.isAnimating) return;
      this.isAnimating = true;
      gsap.timeline({
        onStart: () => {
          (document.querySelector('.overlay') as HTMLElement).style.zIndex = '9999';
        },
        onComplete: () => {
          this.isAnimating = false;
          (document.querySelector('.overlay') as HTMLElement).style.zIndex = '0';
        }
      })
        .set(overlayPath, {
          attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' }
        })
        .to(overlayPath, {
          duration: 0.8,
          ease: 'power4.in',
          attr: { d: 'M 0 0 V 50 Q 50 100 100 50 V 0 z' }
        }, 0)
        .to(overlayPath, {
          duration: 0.3,
          ease: 'power2',
          attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' },
          onComplete: () => {
            (document.documentElement as HTMLHtmlElement).style.overflowY = 'unset';
            (document.querySelector('#overlay_projects') as HTMLElement).classList.remove('op_active');
            (document.querySelector('#overlay_projects') as HTMLElement).classList.add('op_inactive');

            // frame.classList.remove('frame--menu-open');
            // menuWrap.classList.remove('menu-wrap--open');
          }
        })
        // now reveal
        .set(overlayPath, {
          attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' }
        })
        .to(overlayPath, {
          duration: 0.3,
          ease: 'power2.in',
          attr: { d: 'M 0 100 V 50 Q 50 100 100 50 V 100 z' }
        })
        .to(overlayPath, {
          duration: 0.8,
          ease: 'power4',
          attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
        })
      // title elements
      // .to([title.main, title.sub], {
      //   duration: 1.1,
      //   ease: 'power4',
      //   y: 0,
      //   stagger: -0.05
      // }, '>-=1.1')
      // // menu items translate animation
      // .to(menuItems, {
      //   duration: 0.8,
      //   ease: 'power2.in',
      //   y: 100,
      //   opacity: 0,
      //   stagger: -0.05
      // }, 0)

    }
    closeMenu();
  }

}
