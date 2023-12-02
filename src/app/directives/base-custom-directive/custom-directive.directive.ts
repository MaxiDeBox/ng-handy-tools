import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
  standalone: true
})
export class CustomDirectiveDirective {
  @Input() appCustomDirective!: string;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.appCustomDirective;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = null;
  }

}
