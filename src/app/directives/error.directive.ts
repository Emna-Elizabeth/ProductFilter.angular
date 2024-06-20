import { Directive, ElementRef, HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appError]',
  standalone: true
})

  export class ErrorDirective {
    render: any;


    // constructor(private el: ElementRef) {}
  
    // @HostListener('mouseover') onMouseEnter() {
    //   this.el.nativeElement.style.backgroundColor = 'red';

    // }
  
    // @HostListener('mouseleave') onMouseLeave() {
    //   this.el.nativeElement.style.backgroundColor = null;
    // }
  
  
    constructor(private el: ElementRef,private renderer: Renderer2) {}

    @HostListener('mouseover') onMouseEnter() {
      this.setBackgroundColor(this.el.nativeElement, 'red');
    }
  
    @HostListener('mouseleave') onMouseLeave() {
      this.setBackgroundColor(this.el.nativeElement, '');
    }
  
    private setBackgroundColor(element: any, color: string): void {
      
      this.renderer.setStyle(element, 'backgroundColor', color);
      for (let child of element.children) {
       this.renderer.setStyle(child,'backgroundColor',color);
      }
    }
  
  


}
