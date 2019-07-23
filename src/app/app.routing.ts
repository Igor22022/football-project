import { RouterModule, Routes } from '@angular/router';

import { EnglandComponent } from './components/england/england.component';
import { AustriaComponent } from './components/austria/austria.component';
import { GermanyComponent } from './components/germany/germany.component';
import { ItalyComponent } from './components/italy/italy.component';
import { SpainComponent } from './components/spain/spain.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: EnglandComponent
  },
  {
    path: 'austria',
    component: AustriaComponent
  },
  {
    path: 'england',
    component: EnglandComponent
  },

  {
    path: 'italy',
    component: ItalyComponent
  },

  {
    path: 'spain',
    component: SpainComponent
  },

  {
    path: 'germany',
    component: GermanyComponent
  },
];