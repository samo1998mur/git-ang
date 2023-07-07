import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { QuestionsComponent } from "./questions.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import {  HttpClientModule } from "@angular/common/http";
import { QuestionsService } from "./questions.service";

@NgModule({
    declarations: [
        QuestionsComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      MatIconModule,
      MatButtonModule,
      MatStepperModule,
      ReactiveFormsModule,
      HttpClientModule,
      RouterModule.forChild([
        {path:'',component:QuestionsComponent}
      ])
    ],
    providers: [QuestionsService]
  })
export class QuestionsModule{

}