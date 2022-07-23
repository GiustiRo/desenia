import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
type sectionsEnum = 0 | 1 | 2;

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit, AfterViewInit {
  lightMode: boolean = true;
  mainView: sectionsEnum = 0;
  isSmallScreen: boolean = window.isSmallScreen;
  toggleRenders: boolean = false; // Only for small screens.
  items =
    {
      project_light: [
        {
          img: '../assets/img/interiores/cabaña/portada_light_t.jpg',
        },
        {
          img: '../assets/img/interiores/cabaña/02.jpg',
        },
        {
          img: '../assets/img/interiores/cabaña/03.jpg',
        }
      ],
      project_night: [
        {
          img: '../assets/img/interiores/cabaña/portada_night_t.jpg',
        }
      ],
    }


  @ViewChild('blurBackground') blurBackground!: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.blurBackground.nativeElement.style.backgroundImage = `url(${this.items.project_light[0].img})`
  }

  switchLightMode(force?:boolean): void {
    this.lightMode = force? force : !this.lightMode;
    if (this.lightMode) {
      this.blurBackground.nativeElement.style.filter = `grayscale(0.5) blur(20px) brightness(0.6)`
      document.documentElement.style.setProperty('--qui-color', '#191010');
      document.documentElement.style.setProperty('--white', 'white');
    } else {
      this.blurBackground.nativeElement.style.filter = `grayscale(0.5) blur(20px) brightness(0.2)`
      document.documentElement.style.setProperty('--qui-color', 'white');
      document.documentElement.style.setProperty('--white', '#191010');
    }
  }

  switchSection(sectionEnum: sectionsEnum): void {
    this.mainView = sectionEnum;
    this.switchLightMode(true)
    switch (sectionEnum) {
      case 0:

        break;
      case 1:
        
        break;
      case 2:
        
        break;
    
      default:
        break;
    }

  }

  toggleRendersView(): void{
    this.toggleRenders = !this.toggleRenders;
  }

}
