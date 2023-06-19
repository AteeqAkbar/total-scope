import { Component, Input } from '@angular/core';

@Component({
  selector: 'pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.scss'],
})
export class PricingCardComponent {
  @Input() pricingCardData: { icon: string; text: string; heading: string };

  constructor() {
    this.pricingCardData = { icon: '', text: '', heading: '' };
  }
}
