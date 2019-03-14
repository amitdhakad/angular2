import { Component , Directive ,ElementRef, HostListener  } from "@angular/core"
import {Input, TemplateRef, ViewContainerRef  } from "@angular/core"


@Directive({
  selector: '[highlightText]',  
})
export class DirectiveTestComponent {  
  constructor(private el: ElementRef) {
      // this.el.nativeElement.style.backgroundColor = 'yellow';
    }

    @HostListener('mouseenter') onMouseEnter() {
        console.log(this.el,"mouseenter")
        this.highlight('red');
    }
    
    @HostListener('mouseleave') onMouseLeave() {
        //console.log(this.el,"mouseleave")
        this.highlight(null);
    }
        
    
    private highlight(color: string) {
        this.el.nativeElement.style.color = color;
    }

}

@Directive({
  selector: '[appUnless]',  
})

export class CoustomStrDirective {  
    // constructor(el: ElementRef) {
    //    el.nativeElement.style.backgroundColor = 'yellow';
    //    console.log(el,"mouseenter")
    // }

    private hasView = false;
 
  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { }    
 
  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

}

@Directive({
     selector: '[NewappUnless]',
})

export class NewCoustom {
    @Input() set NewappUnless(condition: boolean) {
        console.log(condition,'NewappUnless')
        
    }

}