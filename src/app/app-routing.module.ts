import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './components/manage/manage.component';
import { BookcardComponent } from './components/bookcard/bookcard.component';

const routes: Routes = [
  {
    path:'',
    component:BookcardComponent
  },
  {
    path:'books/manage',
    component:ManageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
