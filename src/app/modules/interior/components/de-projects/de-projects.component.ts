import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-de-projects',
  templateUrl: './de-projects.component.html',
  styleUrls: ['./de-projects.component.scss']
})
export class DeProjectsComponent implements OnInit {

  constructor(
    private scrollSv: ScrollService
  ) { }

  ngOnInit(): void {
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

}
