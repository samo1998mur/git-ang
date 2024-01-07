import { CommonModule } from "@angular/common";
import { AboutComponent } from "./about.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { QuestionsService } from "../questions/questions.service";
// import { TochengeService } from "../tochenge.service";


@NgModule({
    declarations: [
      AboutComponent,  
    ],
    imports: [
      CommonModule,
      RouterModule.forChild([
        {path:'',component:AboutComponent}
      ])
    ],
    exports: [RouterModule],
    // providers: [TochengeService]

  })
export class AboutModule{

}