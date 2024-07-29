import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBgColorandHover]',
  standalone: true
})
export class BgColorandHoverDirective {
  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  // constructor(private el: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('blue');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('red');
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
