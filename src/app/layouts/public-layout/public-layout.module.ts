import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ButtonsModule } from '@progress/kendo-angular-buttons'
import { IconsModule } from '@progress/kendo-angular-icons'
import { IndicatorsModule } from '@progress/kendo-angular-indicators'
import { InputsModule } from '@progress/kendo-angular-inputs'
import { LayoutModule } from '@progress/kendo-angular-layout'
import { NavigationModule } from '@progress/kendo-angular-navigation'
import { PopupModule } from '@progress/kendo-angular-popup'
import { FooterComponent } from './components/footer/footer.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { AboutComponent } from './pages/about/about.component'
import { HomeComponent } from './pages/home/home.component'
import { PublicLayoutRoutingModule } from './public-layout-routing.module'
import { PublicLayoutComponent } from './public-layout.component';
import { FutureEstimateComponent } from './pages/home/future-estimate/future-estimate.component';
import { EstimateCardComponent } from './pages/home/estimate-card/estimate-card.component';
import { QrCardComponent } from './pages/home/qr-card/qr-card.component';
import { FutureEstimateVideoComponent } from './pages/home/future-estimate-video/future-estimate-video.component'

@NgModule({
  declarations: [
    PublicLayoutComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    NavbarComponent,
    FutureEstimateComponent,
    EstimateCardComponent,
    QrCardComponent,
    FutureEstimateVideoComponent,
  ],
  imports: [
    CommonModule,
    PublicLayoutRoutingModule,
    NavigationModule,
    PopupModule,
    IconsModule,
    ButtonsModule,
    IndicatorsModule,
    InputsModule,
    LayoutModule,
  ],
})
export class PublicLayoutModule {}
