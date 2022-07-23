import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  selector: '[appDeferLoading]',
})
export class DeferLoadingDirective implements AfterViewInit {
  @Output() public deferLoad: EventEmitter<any> = new EventEmitter();
  @Input() horizontal: boolean = false;

  private intersectionObserver?: IntersectionObserver;

  constructor(private element: ElementRef) {}

  public ngAfterViewInit(): void {
    this.intersectionObserver = new IntersectionObserver((entries) => {
      this.checkForIntersection(entries);
    }, {rootMargin: this.horizontal? "4000px 0px 4000px 0px": "0px"});
    this.intersectionObserver.observe(this.element.nativeElement);
  }

  private checkForIntersection = (entries: Array<IntersectionObserverEntry>) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (this.checkIfIntersecting(entry)) {
        // console.log('show!', entries);
        this.deferLoad.emit(true);
        this.intersectionObserver?.unobserve(this.element.nativeElement);
        this.intersectionObserver?.disconnect();
      }
    });
  };

  private checkIfIntersecting(entry: IntersectionObserverEntry): boolean {
    return entry.isIntersecting && entry.target === this.element.nativeElement;
  }
}
