import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromMain from '../../../../store/index';
import * as fromInteriorActions from '../../store/actions/interior.actions'
import * as fromInteriorSelectors from '../../store/selectors/interior.selectors'
import { ScrollService } from 'src/app/services/scroll.service';
import { Interior } from '../../store/models/interior.model';

@Component({
  selector: 'app-de-projects',
  templateUrl: './de-projects.component.html',
  styleUrls: ['./de-projects.component.scss']
})
export class DeProjectsComponent implements OnInit {
  isAnimating: boolean = false;
  interiorsList: Interior[] = [
    {
      longDesc: 'El contenido está siendo procesado, mantenga su conexión en la red.',
      title: 'obteniendo datos',
      images: { day: ['a', 'b', 'c'] }
    } as Interior
  ];

  constructor(
    private scrollSv: ScrollService,
    private router: Router,
    private store: Store<fromMain.State>
  ) {
    // this.store.dispatch(fromInteriorActions.loadInteriors());
  }

  ngOnInit(): void {
    this.store.select(fromInteriorSelectors.selectInteriorAll).pipe().subscribe(interiors => {
      console.warn(interiors);
      if (interiors && interiors.length) {
        this.interiorsList = interiors.reverse();

      }
      setTimeout(() => {
        console.warn('settinup animations...');
        this.scrollSv.transitionPage();
        this.hzScrollProjects();

        const title = document.querySelectorAll('.p-title');
        const windowWidth = window.innerWidth / 5;
        const windowHeight = window.innerHeight / 5;
        for (let i = 0; i < title.length; i++) {
          const element = title[i] as HTMLElement;
          const handleEL = element!.addEventListener('mouseenter', (e: any) => {
            element!.addEventListener('mousemove', (e) => {
              const mouseX = (e.clientX * 0.3) / windowWidth;
              const mouseY = e.clientY / windowHeight;
              element!.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
            })
          }) as unknown as EventListenerObject;
          element!.removeEventListener('mouseleave', handleEL)
          element!.removeEventListener('mousemove', handleEL, true);
        }
      })
    })
  }


  hzScrollProjects(): void {
    this.scrollSv.hzScrollProjects();
  }

  navTo(section: string): void {
    this.router.navigate([section]);
  }



}
