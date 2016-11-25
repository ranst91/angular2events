import {Routes} from '@angular/router';
import {About} from './about/about';
import {Home} from './home/home';
import {Events} from './events/events';
import {Edit} from './edit/edit';

export const rootRouterConfig: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: Home},
    {path: 'about', component: About},
    {path: 'events', component: Events},
    {path: 'events/:event/users', component: Edit}
];

