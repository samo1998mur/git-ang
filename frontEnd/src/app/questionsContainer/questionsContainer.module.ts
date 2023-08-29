import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { QuestionsContainerComponent } from "./questionsContainer.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import {  HttpClientModule } from "@angular/common/http";
import { QuestionsComponent } from "../questions/questions.component";
import {MatRadioModule} from '@angular/material/radio';
import { QuestionsService } from "../questions/questions.service";
import { ModalComponent } from "../modal/modal.component";
import { RefDirective } from "../questions/ref.directive";
import { TimerComponent } from "../timer/timer.component";
import { Modal2Component } from "../modal2/modal2.component";
import { Ref2Directive } from "./ref2.directive";
import { TimeDirective } from "./time.directive";
import { TimeModalComponent } from "../time-modal/time-modal.component";
import { TocheckComponent } from "../tocheck/tocheck.component";


@NgModule({
    declarations: [
        QuestionsComponent,
        QuestionsContainerComponent,
        ModalComponent,
        RefDirective,
        TimerComponent,
        Modal2Component,
        Ref2Directive,
        TimeDirective,
        TimeModalComponent,
        TocheckComponent
      
    ],
    imports: [
      CommonModule,
      FormsModule,
      MatIconModule,
      MatButtonModule,
      MatStepperModule,
      ReactiveFormsModule,
      HttpClientModule,
      MatRadioModule,
      RouterModule.forChild([
        {path:'',component:QuestionsContainerComponent,children:[
          {path: 'tochect',component:TocheckComponent}
        ]}      ])
    ],
    providers: [QuestionsService],
    entryComponents:[ModalComponent,Modal2Component,TimeModalComponent]
  })
export class QuestionsModule{

}