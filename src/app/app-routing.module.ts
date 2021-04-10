import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { CreditsComponent } from './credits/credits.component';
import { HistoryComponent } from './history/history.component';


const routes: Routes = [
  {
    path: '',
    component: CalculatorComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'about',
    component: CreditsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
