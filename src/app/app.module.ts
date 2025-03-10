import { NgModule } from '@angular/core';

import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WorksComponent } from './works/works.component';
import { WorkViewComponent } from './work-view/work-view.component';
import { WorksPageComponent } from './works-page/works-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SkillBubblesComponent } from './skill-bubbles/skill-bubbles.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { ClientCarouselComponent } from './client-carousel/client-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutMeComponent,
    WorksComponent,
    WorkViewComponent,
    WorksPageComponent,
    AboutPageComponent,
    CarouselComponent,
    SkillBubblesComponent,
    ContactComponent,
    ClientCarouselComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
