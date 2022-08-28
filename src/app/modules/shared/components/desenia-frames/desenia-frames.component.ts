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

  indexBoxes: any[] = [];

  constructor(
    private scrollSv: ScrollService
  ) { }

  ngOnInit(): void {
    let rand = 2;//Math.floor(Math.random() * 3);
    this.pickStyle = this.stylesList[rand];

    window.addEventListener('scroll', this.hzScroll);

    this.indexBoxes = [
      {
        title: 'Le Petit Brisé',
        shortDesc: 'Cabaña en el cerror de materiales orgánicos.',
        materialUrl: 'https://static.vecteezy.com/system/resources/thumbnails/003/304/627/small/wood-texture-background-free-vector.jpg'
      },
      {
        title: 'Cocina "Susanne"',
        shortDesc: 'Lorem ipsum via aqua most petiern amen.',
        materialUrl: 'https://i.pinimg.com/236x/11/e0/4e/11e04efd71926730d3e2c730f407ce68--material.jpg'
      },
      {
        title: 'Room & Shower',
        shortDesc: 'Lorem ipsum via aqua most petiern amen.',
        materialUrl: 'https://static.vecteezy.com/system/resources/thumbnails/005/461/026/small/seamless-floral-pattern-with-leaves-on-a-green-background-natural-texture-for-eco-design-of-textiles-wallpaper-printing-on-paper-fabric-scrapbooking-vector.jpg'
      },
      {
        title: 'Cielo Violeta',
        shortDesc: 'Lorem ipsum via aqua most petiern amen.',
        materialUrl: 'https://designscad.com/wp-content/uploads/2017/01/brick_wall_texture_2d_bmp_graphics_graphics_81003.jpg'
      }
    ]
  }

  async hzScroll(event: Event): Promise<void | boolean> {
    let thresholdValue = 1400;

    let calcStrokeMove = (reset?: boolean) => {
      let multipy = 8;
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
      (document.querySelector('#draw-path') as SVGPathElement).style.strokeDashoffset = `${-(reset ? 0 : calcAshes * 1.3) + 15500}`;
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
