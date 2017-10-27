import {
    Directive,
    ElementRef,
    Renderer2,
    OnInit,
    HostListener,
    HostBinding,
    Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor: string;
  @Input('appBetterHighlight') overColor: string;

  constructor(private eleRef: ElementRef, private render: Renderer2) { }

  @HostBinding('style.background-color') backgroundColor: string;;

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
      // this.render.setStyle(this.eleRef.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
      // this.render.setStyle(this.eleRef.nativeElement, 'background-color', 'gray');
      this.backgroundColor = this.overColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.render.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
