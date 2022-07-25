import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three'
import { EngineService } from './engine.service';
@Component({
  selector: 'app-three-box',
  templateUrl: './three-box.component.html',
  styleUrls: ['./three-box.component.scss'],
  providers: [EngineService]
})
export class ThreeBoxComponent implements OnInit {

  @ViewChild('rendererCanvas', {static: true})
  public rendererCanvas!: ElementRef<HTMLCanvasElement>;

  public constructor(private engServ: EngineService) {
  }

  public ngOnInit(): void {
    this.engServ.createScene(this.rendererCanvas);
    this.engServ.loadModel('../../../assets/img/interiores/cabaña/3D/obj/caba.obj')
    setTimeout(() => {
      this.engServ.animate();
    },1000)
  }

}
