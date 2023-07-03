import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {path:'',
  loadChildren: () => import('./component/home/home.module').then(m => m.HomeModule)
  },
  {path:'about',
  loadChildren: () => import('./component/about/about.module').then(m => m.AboutModule)
  },
  {path:'questions',
  loadChildren: () => import('./component/questions/questions.module').then(m => m.QuestionsModule)
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
