import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { DetailsViewComponent } from './details-view/details-view.component';

const routes: Routes = [
  { path: 'details/:about', pathMatch: 'full', component: DetailsViewComponent },
  { path: '', component: SearchComponent },
  // { path: 'contacto', component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
