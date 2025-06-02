import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProgramDetailComponent } from './pages/program-detail/program-detail.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: 'program/:id',
        component: ProgramDetailComponent,
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

