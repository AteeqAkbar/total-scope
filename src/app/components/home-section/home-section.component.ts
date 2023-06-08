import { Component } from '@angular/core';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss'],
})
export class HomeSectionComponent {
  public items = [
    {
      icon: 'assets/Icons1.svg',
      text: 'The most accurate and documented estimates in the industry',
    },
    {
      icon: 'assets/Icons2.svg',
      text: 'Representation of the full scope of the project',
    },
    {
      icon: 'assets/Icons3.svg',
      text: 'Time-saving estimates and communication with the carrier',
    },
    {
      icon: 'assets/Icons4.svg',
      text: 'Proper project valuation',
    },
    {
      icon: 'assets/Icons5.svg',
      text: 'Automated process management with our free app',
    },
  ];
}
