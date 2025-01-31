import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { WorkViewComponent } from './work-view/work-view.component';
import { WorksPageComponent } from './works-page/works-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
  },
  {
    path: 'work-view/:id',
    component: WorkViewComponent,
  },
  {
    path: 'works-page',
    component: WorksPageComponent,
  },
  { path: 'about-page', component: AboutPageComponent },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
