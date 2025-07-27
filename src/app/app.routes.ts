// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { SlidesComponent } from './slides/slides.component';
import { SectorDetailComponent } from './sector-detail/sector-detail.component';
import { SlideDetailComponent } from './slides/slide-detail/slide-detail.component';

export const routes: Routes = [
  { path: '', component: SlidesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: SlidesComponent },
  { path: 'sectors/:sectorId', component: SectorDetailComponent },
  { path: 'slide-detail/:slideId',component: SlideDetailComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
