import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { PublicLayoutComponent } from './public-layout.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { VideosComponent } from './pages/videos/videos.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'pricing', component: PricingComponent },
      { path: 'videos', component: VideosComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'testimonials', component: TestimonialsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicLayoutRoutingModule {}
