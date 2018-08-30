import { Directive, 
         Input,
         OnInit,
         ElementRef,
         HostListener,
         Renderer2
} from '@angular/core';

// <p appHighLight
// <div appHighLight 

// p, div, etc are called hostElement/DOM

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input()
  color: string;

  @Input()
  theme: string; // example

  // angular injects hostElement in cons
  // angular injects renderer
  constructor(private hostElement: ElementRef, 
             private renderer: Renderer2) {
    console.log('highlight directive created')
  }

  ngOnInit() {
    this.color = this.color || 'yellow';
   
    console.log('hosting element ',
        this.hostElement.nativeElement.tagName);

    console.log('highlight ngOnInit', this.color);
  }

  @HostListener('mouseenter')
  onEnter() {
    console.log('directive mouse enter');

    this.renderer.setStyle(this.hostElement.nativeElement,
                           'background',
                            this.color);
  }

  @HostListener('mouseleave')
  onLeave() {
    console.log('mouse leave');
    this.renderer.removeStyle(this.hostElement.nativeElement,
                              'background');
  }

}
