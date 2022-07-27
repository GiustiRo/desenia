import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desenia-frames',
  templateUrl: './desenia-frames.component.html',
  styleUrls: ['./desenia-frames.component.scss']
})
export class DeseniaFramesComponent implements OnInit {
  showContent:boolean = false;
  stylesList: string[] = ['a','b','c'];
  pickStyle!: string
  constructor() { }

  ngOnInit(): void {
    let rand = Math.floor(Math.random() * 3);    
    this.pickStyle = this.stylesList[rand];
  }

  toggleShowContent(): void{
    this.showContent = true;
  }

}
