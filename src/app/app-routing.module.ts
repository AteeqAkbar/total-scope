// IMPORTING THE ANGULAR MODULES FOR POPUPS.
import { NgModule } from '@angular/core'

// IMPORTING THE ANGULAR MODULES FOR DOING OPERATIONS ON URL.
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component'

// DEFINING THE ROUTES FOR ANGULAR.
const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./modules/about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'pricing',
        loadChildren: () =>
          import('./modules/pricing/pricing.module').then(
            (m) => m.PricingModule
          ),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./modules/contact/contact.module').then(
            (m) => m.ContactModule
          ),
      },
      {
        path: 'testimonials',
        loadChildren: () =>
          import('./modules/testimonials/testimonials.module').then(
            (m) => m.TestimonialsModule
          ),
      },
    ],
  },
]

// AN ANGULAR DECORATOR THAT IDENTIFIES THE MODULE'S OWN COMPONENTS, DIRECTIVES, AND PIPES.
// SO THAT EXTERNAL COMPONENTS CAN USE THEM.
@NgModule({
  imports: [
    // SETTING THE ABOVE ROUTES IN ANGULAR ROUTER MODULE.
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],

  exports: [
    // EXPORTING THE ROUTER MODULE.
    RouterModule,
  ],
})

// DECLARING THE AppRoutingModule CLASS WITH EXPORT SO THAT WE CAN IMPORT THIS SERVICE INTO ANY OTHER COMPONENT OR SERVICE.
export class AppRoutingModule {}
