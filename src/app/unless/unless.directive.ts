import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

@Input() set appUnless(condition: boolean){
  if(condition){
    console.log(this.templateRef);
    this.vcRef.createEmbeddedView(this.templateRef);
  } else {
    this.vcRef.clear();
  }
}

  constructor(private vcRef: ViewContainerRef, private templateRef: TemplateRef<any>) { }

}
