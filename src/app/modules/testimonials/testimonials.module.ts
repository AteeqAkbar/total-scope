import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimonialsRoutingModule } from './testimonials.routing';
import { TestimonialsComponent } from './testimonials.component';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@NgModule({
  declarations: [TestimonialsComponent],
  imports: [
    CommonModule,
    TestimonialsRoutingModule,
    ScrollViewModule,
    ButtonsModule,
  ],
})
export class TestimonialsModule {}
