import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeseniaFramesComponent } from './desenia-frames.component';

describe('DeseniaFramesComponent', () => {
  let component: DeseniaFramesComponent;
  let fixture: ComponentFixture<DeseniaFramesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeseniaFramesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeseniaFramesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
