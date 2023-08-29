import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[appTime]'
})
export class TimeDirective {
    constructor(public containerTime: ViewContainerRef){
    }
}