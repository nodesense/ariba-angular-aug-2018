import { Directive, Renderer2, 
        ElementRef, Input, 
        OnInit } from '@angular/core';

@Directive({
  selector: '[testable]'
})
export class TestableDirective implements OnInit {
  @Input('testable')
  uniqName: string;

  constructor(private hostElement: ElementRef, 
              private renderer: Renderer2) {

               }

    ngOnInit() {
      this.renderer.setAttribute(
        this.hostElement.nativeElement,
        'uniqName',
        this.uniqName
      );
    }


}
