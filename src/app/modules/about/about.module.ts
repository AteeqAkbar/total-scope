import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NgxUiLoaderService } from 'ngx-ui-loader';


import { AboutComponent } from './about.component'
import { AboutRoutingModule } from './about.routing'

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, AboutRoutingModule],
})
export class AboutModule {}
