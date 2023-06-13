import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IconsModule } from '@progress/kendo-angular-icons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { PopupModule } from '@progress/kendo-angular-popup';
import { ApiService } from 'src/core/api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/public-layout/components/footer/footer.component';

import { NavbarComponent } from './layouts/public-layout/components/navbar/navbar.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { FutureEstimatComponent } from './pages/home/components/future-estimate/future-estimate.component';
import { FutureEstimatVideoComponent } from './pages/home/components/future-estimate-video/future-estimate-video.component';
import { EstimatCardComponent } from './pages/home/components/estimate-card/estimate-card.component';
import { QrCardComponent } from './pages/home/components/qr-card/qr-card.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

    FooterComponent,

    PublicLayoutComponent,
    HomeComponent,
    FutureEstimatComponent,
    FutureEstimatVideoComponent,
    EstimatCardComponent,
    QrCardComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonsModule,
    BrowserAnimationsModule,
    NavigationModule,
    LayoutModule,
    IndicatorsModule,
    PopupModule,
    InputsModule,
    IconsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
