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

@NgModule({
    declarations: [
        QuestionsComponent,
        QuestionsContainerComponent
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
        {path:'',component:QuestionsContainerComponent}
      ])
    ],
    providers: [QuestionsService]
  })
export class QuestionsModule{

}