import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[appRef2]'
})
export class Ref2Directive {
    constructor(public containerRef2: ViewContainerRef){
    }
}