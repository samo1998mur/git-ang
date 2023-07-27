import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {path:'',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {path:'about',
  loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {path:'questions',
  loadChildren: () => import('./questionsContainer/questionsContainer.module').then(m => m.QuestionsModule)
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
