import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DemoComponent } from './components/demo/demo.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { Demo5Component } from './components/demo/demo5/demo5.component';
import { Demo6Component } from './components/demo/demo6/demo6.component';
import { TargetPageComponent } from './components/demo/demo6/target-page/target-page.component';
import { Demo7Component } from './components/demo/demo7/demo7.component';
import { ExoComponent } from './components/exos/exo.component';
import { Exo1Component } from './components/exos/exo1/exo1.component';
import { Exo2Component } from './components/exos/exo2/exo2.component';
import { CreateGroupComponent } from './components/exos/exo3/create-group/create-group.component';
import { Exo3Component } from './components/exos/exo3/exo3.component';
import { HomeComponent } from './components/home/home.component';
import { alertGuard } from './guards/alert.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'demo',
    component: DemoComponent,
    children: [
      {
        path: 'demo1',
        component: Demo1Component,
      },
      {
        path: 'demo2',
        component: Demo2Component,
      },
      {
        path: 'demo3',
        component: Demo3Component,
      },
      {
        path: 'demo4',
        component: Demo4Component,
      },
      {
        path: 'demo5',
        component: Demo5Component,
      },
      {
        path: 'target',
        component: TargetPageComponent,
      },
      {
        path: 'demo6',
        component: Demo6Component,
      },
      {
        path: 'demo7',
        component: Demo7Component,
      },
    ],
  },
  {
    path: 'exo',
    component: ExoComponent,
    children: [
      {
        path: 'exo1',
        component: Exo1Component,
      },
      {
        path: 'exo2',
        component: Exo2Component,
      },
      {
        path: 'exo3/group',
        component: Exo3Component,
      },
      {
        path: 'exo3/create/group',
        canDeactivate: [alertGuard],
        component: CreateGroupComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
