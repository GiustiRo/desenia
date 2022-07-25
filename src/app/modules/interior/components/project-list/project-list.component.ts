import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromMain from '../../../../store/index'
import * as fromInteriorActions from '../../store/actions/interior.actions'
import * as fromInteriorSelectors from '../../store/selectors/interior.selectors'
import { take } from 'rxjs/operators'
import { Interior } from '../../store/models/interior.model';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  interiorsList: Interior[] = [];
  constructor(
    private store: Store<fromMain.State>
  ) {
    this.store.dispatch(fromInteriorActions.loadInteriors());
   }

  ngOnInit(): void {
    this.store.select(fromInteriorSelectors.selectInteriorAll).pipe().subscribe(interiors => {
      console.warn(interiors);
      this.interiorsList = interiors;
    })
  }

}
