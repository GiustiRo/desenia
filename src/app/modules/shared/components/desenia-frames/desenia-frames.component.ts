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

    let calcStrokeMove = (reset?: boolean) => {
      let multipy = 6;
      let calcAshes = window.scrollY - thresholdValue;
      // console.warn('ashes::::', calcAshes);
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
      (document.querySelector('#d-frame-scroll') as HTMLDivElement).style.transform = `translateX(-${Math.ceil(window.scrollY - thresholdValue)}px)`;
    }else{
      calcStrokeMove(true);
      (document.querySelector('#d-frame-scroll') as HTMLDivElement).style.transform = `translateX(0px)`;
    }
  }

  entryViewport(): void{
    console.warn('box...');
    
  }
}
