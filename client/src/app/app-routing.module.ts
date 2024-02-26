import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { HomeComponent } from "./pages/home/home.component";
import { CraftComponent } from "./pages/craft/craft.component";


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'craft',
        component: CraftComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
