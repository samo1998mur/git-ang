import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';


import { DatestorageService } from '../datestorage.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  // providers:[TochengeService]
})
export class AboutComponent implements OnInit, OnDestroy {
	
  levid: string | null | undefined;
  constructor( 
    private readonly datestorageService:DatestorageService,  
    ) { 
    
    }

  ngOnInit(): void {
    console.log("arajin")
    // this.tochengeService.levelId=this.levelid
  
    this.datestorageService.levelId.subscribe((lid:string | null | undefined)=> this.log(lid))
    

  }
  
  private log(data: string | null | undefined): void {
    // console.log(data);
    
    this.levid=data
    console.log(this.levid);
  }
  ngOnDestroy(): void {
    this.datestorageService.levelId.next()
    // this.datestorageService.levelId.unsubscribe()
    console.log("uns")
  }
}
