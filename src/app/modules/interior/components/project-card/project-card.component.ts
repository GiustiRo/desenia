import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Interior } from '../../store/models/interior.model';

type sectionsEnum = 0 | 1 | 2;

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit, AfterViewInit {
  @Input('item') item!: Interior;
  @Input('number') number!: number;
  lightMode: boolean = true;
  mainView: sectionsEnum = 0;
  isSmallScreen: boolean = window.isSmallScreen;
  toggleRenders: boolean = false; // Only for small screens.
  reRenderSize: boolean = false;

  @ViewChild('blurBackground') blurBackground!: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.blurBackground.nativeElement.style.backgroundImage = `url(${this.item.images.day[0]})`
  }

  switchLightMode(force?:boolean): void {
    this.lightMode = force? force : !this.lightMode;
    if (this.lightMode) {
      this.blurBackground.nativeElement.style.filter = `grayscale(0.5) blur(20px) brightness(0.5)`
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
    switch (sectionEnum) {
      case 0:

        break;
      case 1:
      this.switchLightMode(true)
        break;
      case 2:
        
        break;
    
      default:
        break;
    }

  }

  toggleRendersView(): void{
    this.toggleRenders = !this.toggleRenders;
    this.reRenderSize = true;
    setTimeout(() => {
      this.reRenderSize = false;
    })
  }

}
