import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-de-projects',
  templateUrl: './de-projects.component.html',
  styleUrls: ['./de-projects.component.scss']
})
export class DeProjectsComponent implements OnInit {
  isAnimating: boolean = false;
  constructor(
    private scrollSv: ScrollService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.scrollSv.transitionPage();
    this.hzScrollProjects();

    const title = document.querySelector('.p-title') as HTMLElement;
    const windowWidth = window.innerWidth / 5;
    const windowHeight = window.innerHeight / 5;

    const handleEL = title!.addEventListener('mouseenter', (e: any) => {
      title!.addEventListener('mousemove', (e) => {
        const mouseX = (e.clientX *0.3) / windowWidth;
        const mouseY = e.clientY / windowHeight;
        title!.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
      })
    }) as unknown as EventListenerObject;
    title!.removeEventListener('mouseleave', handleEL)
    title!.removeEventListener('mousemove', handleEL, true);
  }

  hzScrollProjects(): void {
    this.scrollSv.hzScrollProjects();
  }

  navTo(section:string): void {
    this.router.navigate([section]);
  }

  

}
