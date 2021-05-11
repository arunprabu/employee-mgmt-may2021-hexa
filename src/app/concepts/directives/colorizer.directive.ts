import { Directive, ElementRef, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appColorizer]' // attribute selector
})
export class ColorizerDirective {

  constructor( private elRef: ElementRef, private renderer: Renderer2 ) { // Dependency Injection
    console.log('Inside Constructor');

    console.log(this.elRef.nativeElement); // on what element the colorizer directive is used

    const el = this.elRef.nativeElement;

    this.renderer.setStyle(el, 'background-color', 'red');
    this.renderer.setStyle(el, 'height', '300px');
    this.renderer.setStyle(el, 'color', '#fff');

    // TODO: work on events in directive -- learn about @HostListener()
  }

}
