import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { IconsModule } from "@progress/kendo-angular-icons";
import { IndicatorsModule } from "@progress/kendo-angular-indicators";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { NavigationModule } from "@progress/kendo-angular-navigation";
import { PopupModule } from "@progress/kendo-angular-popup";
import { ApiService } from "src/core/api.service";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeroComponent } from "./components/hero/hero.component";
import { VideoComponent } from "./components/hero/video/video.component";
import { CardComponent } from "./components/home-section/card/card.component";
import { HomeSectionComponent } from "./components/home-section/home-section.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    VideoComponent,
    FooterComponent,
    HomeSectionComponent,
    CardComponent,
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
