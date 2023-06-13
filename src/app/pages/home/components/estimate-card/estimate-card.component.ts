import { Component, Input } from '@angular/core';

@Component({
  selector: 'estimate-card',
  templateUrl: './estimate-card.component.html',
  styleUrls: ['./estimate-card.component.scss'],
})
export class EstimatCardComponent {
  @Input() estimateCardData: { icon: string; text: string };

  constructor() {
    this.estimateCardData = { icon: '', text: '' };
  }
}
