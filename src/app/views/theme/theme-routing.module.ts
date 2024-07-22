import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';
import { DefaultLayoutComponent } from 'src/app/containers/default-layout/default-layout.component';

const routes: Routes = [
  {path:'',component:DefaultLayoutComponent,children:[
   
    

   
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'slider',
      },
      {
        path: 'slider',
        component: ColorsComponent,
        data: {
          title: 'Colors',
        },
      },
      {
        path: 'our_supporter',
        component: TypographyComponent,
        data: {
          title: 'Typography',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
