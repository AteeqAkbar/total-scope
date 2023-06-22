import { CommonModule } from '@angular/common'
import { ButtonsModule } from '@progress/kendo-angular-buttons'
import { NgModule } from '@angular/core'

import { EstimateCardComponent } from './components/estimate-card/estimate-card.component'
import { FutureEstimateVideoComponent } from './components/future-estimate-video/future-estimate-video.component'
import { FutureEstimateComponent } from './components/future-estimate/future-estimate.component'
import { HomeComponent } from './home.component'
import { HomeRoutingModule } from './home.routing'

@NgModule({
  declarations: [
    HomeComponent,
    FutureEstimateComponent,
    EstimateCardComponent,
    FutureEstimateVideoComponent,
  ],
  imports: [HomeRoutingModule, CommonModule,ButtonsModule],
})
export class HomeModule {}
