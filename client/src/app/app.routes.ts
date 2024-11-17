import { RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { CraftComponent } from './pages/craft/craft.component';
import { SkateboardsComponent } from './pages/skateboards/skateboards.component';
import { WharehouseComponent } from './pages/wharehouse/wharehouse.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { AccountComponent } from './pages/account/account.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'craft/new',
    component: CraftComponent,
  },
  {
    path: 'craft/edit/:id',
    component: CraftComponent,
  },
  {
    path: 'skateboards',
    component: SkateboardsComponent,
  },
  {
    path: 'wharehouse',
    component: WharehouseComponent,
  },
  {
    path: 'inventory/:id',
    component: InventoryComponent,
    /*The index page of the Inventory page is the warehouse and uppon choosing the warehouse 
        it will redirect you inventory based on locationof the warehouse. E.g inventory/location*/
  },
  {
    path: 'onboarding',
    component: OnboardingComponent,
  },
  { path: 'account', component: AccountComponent },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
