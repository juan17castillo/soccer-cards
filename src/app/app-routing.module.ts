import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardFormComponent } from './components/card-form/card-form.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';

const appRoutes: Routes = [
  { path: '', component: CardsListComponent, pathMatch: 'full' },
  { path: 'add-player', component: CardFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
