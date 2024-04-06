import { RouterModule, RouterStateSnapshot, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { HomeComponent } from "./pages/home/home.component";
import { CraftComponent } from "./pages/craft/craft.component";
import { SkateboardsComponent } from "./pages/skateboards/skateboards.component";
import { WharehouseComponent } from "./pages/wharehouse/wharehouse.component";
import { InventoryComponent } from "./pages/inventory/inventory.component";
import { AccountComponent } from "./pages/account/account.component";
import { OnboardingComponent } from "./pages/onboarding/onboarding.component";
import { state } from "@angular/animations";
import { NgModel } from "@angular/forms";


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'craft/new',
        component: CraftComponent
    },
    {
        path: 'craft/edit/:id',
        component: CraftComponent
    },
    {
        path: 'skateboards',
        component: SkateboardsComponent
    },
    {
        path: 'wharehouse',
        component: WharehouseComponent
    },
    {
        path: 'inventory/:id',
        component: InventoryComponent
        /*So the index page of the Inventory page is the warehouse and uppon choosing the warehouse 
        it will redirect you inventory based on locationof the warehouse. E.g inventory/location*/
    },
    {
        path: 'onboarding',
        component: OnboardingComponent
    },
    {
        path: 'account',
        component: AccountComponent,
        canActivate: [(state: RouterStateSnapshot) => {
            // to check for data existing in the local storage
            if (localStorage.getItem('userData')) {
                return true; // to allow acces to the route
            } else {
                // redirects user to the onboarding page if data doesnt exist
                // return state.router.createUser(['/onboarding']);
                return state.url !== '/onboarding' ? state.url : '/onboarding'; // to avoid redirect looping
            }
        }]
    },
    {
        path: '', redirectTo: '/account', pathMatch: 'full'
    }, // defualt route
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
