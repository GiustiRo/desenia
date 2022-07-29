import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';


@Component({
  selector: 'app-desenia-frames',
  templateUrl: './desenia-frames.component.html',
  styleUrls: ['./desenia-frames.component.scss']
})
export class DeseniaFramesComponent implements OnInit {
  showContent: boolean = false;
  stylesList: string[] = ['a', 'b', 'c'];
  pickStyle!: string;

  lastScrollTop: number = 0;

  constructor(
    private scrollSv: ScrollService
  ) { }

  ngOnInit(): void {
    let rand = Math.floor(Math.random() * 3);
    this.pickStyle = this.stylesList[rand];

    window.addEventListener('scroll', this.hzScroll);
  }

  async hzScroll(event: Event): Promise<void | boolean> {
    let thresholdValue = 1400;
    var st = window.pageYOffset || document.documentElement.scrollTop;
    var scrollDirection = st > this.lastScrollTop ? true : false;
    var scrollAmount = scrollDirection ? (st - this.lastScrollTop) : (this.lastScrollTop - st);
    this.lastScrollTop = st <= 0 ? 0 : st;

    let smoothScroll = (target: any, duration: any, reset: boolean) => {
      var target: any = document.querySelector(target);
      var targetPosition = reset ? -target.getBoundingClientRect().width : (!scrollDirection ? -scrollAmount : scrollAmount) * 2; // sets scroll direction.
      var startPosition = target.scrollLeft;
      var startTime: any = null;

      let animation = (currentTime: any) => {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;        
        if(scrollAmount < 100/*touchpad tolerance*/){
          return new Promise(r => setTimeout(target.scrollTo(st-thresholdValue, 0),duration));
        }else{
          cancelAnimationFrame(timeElapsed);
          return new Promise(r => setTimeout(() => {
            cancelAnimationFrame(0);
            if (timeElapsed < duration) requestAnimationFrame(animation);
            var run = ease(timeElapsed, startPosition, targetPosition, duration*1.2);
            target.scrollTo(run, 0);
          }))
        }
      }

      let ease = (t: any, b: any, c: any, d: any) => { t /= d; return -c * t * (t - 2) + b; }; // http://www.gizma.com/easing/
      return new Promise(r => setTimeout(() => requestAnimationFrame(animation)));
    }

    let calcStrokeMove = (reset?: boolean) => {
      let multipy = 6;
      var calcAshes = window.scrollY - thresholdValue;
      console.warn('ashes::::', calcAshes);
      document.querySelectorAll('.path-ashes').forEach((el) => {
        if (reset) {
          (el as SVGPathElement).style.strokeDasharray = '3000';
          return;
        }
        (el as SVGPathElement).style.strokeDashoffset = `${calcAshes * multipy}px`;
        (el as SVGPathElement).style.strokeDasharray = `${calcAshes * multipy < 2800 ? 2800 : calcAshes * multipy}px`;
      });
      (document.querySelector('#draw-path') as SVGPathElement).style.strokeDashoffset = `${(reset ? 0 : calcAshes * 1.3) + 5000}`;
    }

    // TRIGGER SCROLL
    if (window.scrollY > thresholdValue) {
      calcStrokeMove();
      await smoothScroll('#stick-content', 200, false);
    } else if ((window.scrollY < (thresholdValue / 1.5)) && !scrollDirection) {
      calcStrokeMove(true);
      await smoothScroll('#stick-content', 500, true)
    }
  }

  getScroll(): void {
    console.warn('scrolling??');

  }
}
