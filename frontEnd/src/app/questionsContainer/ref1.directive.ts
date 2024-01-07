import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[appRef1]'
})
export class Ref1Directive {
    constructor(public containerRef1: ViewContainerRef){
    }
}