import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-desenia-frames',
  templateUrl: './desenia-frames.component.html',
  styleUrls: ['./desenia-frames.component.scss']
})
export class DeseniaFramesComponent implements OnInit {
  showContent: boolean = false;
  stylesList: string[] = ['a', 'b', 'c'];
  pickStyle!: string
  constructor(
  ) { }

  ngOnInit(): void {
    let rand = Math.floor(Math.random() * 3);
    this.pickStyle = this.stylesList[rand];

  }

  toggleShowContent(): void {
    console.warn('scroll!');
    this.showContent = true;
    let sc = (document.getElementById('stick-content') as HTMLDivElement).getBoundingClientRect();
    console.warn(sc);

    function smoothScroll(target: any, duration: any) {
      var target = document.querySelector(target);
      var targetPosition = target.getBoundingClientRect().width + target.getBoundingClientRect().width;
      var startPosition = target.scrollLeft;
      var distance = targetPosition// - startPosition;
      var startTime: any = null;

      function animation(currentTime: any) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        target.scrollTo(run, 0);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      // http://www.gizma.com/easing/
      function ease(t: any, b: any, c: any, d: any) {
        t /= d/2;
	if (t < 1) return c/2*t*t*t*t + b;
	t -= 2;
	return -c/2 * (t*t*t*t - 2) + b;

      }
      requestAnimationFrame(animation);
    }
    smoothScroll('#stick-content', 5000)
    document.querySelector('#nav-to-left')?.classList.add('anim-cursiva');
    document.querySelectorAll('.path-ashes').forEach(el => el.classList.add('anim-ashes'))

  }

  getScroll(): void {
    console.warn('scrolling??');

  }
}
