import { Component } from '@angular/core';

@Component({
  selector: 'future-estimate',
  templateUrl: './future-estimate.component.html',
  styleUrls: ['./future-estimate.component.scss'],
})
export class FutureEstimatComponent {
  public onButtonClick(): void {
    console.log('click');
  }
}
