import { Directive, AfterViewInit, ElementRef } from "@angular/core";
declare var hljs: any;
@Directive({
  selector: "[Highlight]"
})
export class HighlightDirective {
  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    hljs.highlightBlock(this.elRef.nativeElement);
  }
}
