import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-estimate-card',
  templateUrl: './estimate-card.component.html',
  styleUrls: ['./estimate-card.component.scss'],
})
export class EstimateCardComponent {
  @Input() estimateCardData: { icon: string; text: string }

  constructor() {
    this.estimateCardData = { icon: '', text: '' }
  }
}
