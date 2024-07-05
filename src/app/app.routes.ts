import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home' },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    title: 'User Profile',
  },
  { path: '**', component: NotFoundComponent, title: 'Page not Found' },
];
