import { Component } from '@angular/core'

@Component({
  selector: 'app-future-estimate',
  templateUrl: './future-estimate.component.html',
  styleUrls: ['./future-estimate.component.scss'],
})
export class FutureEstimateComponent {
  public onButtonClick(): void {
    console.log('click')
  }
}
