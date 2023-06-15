import { Component } from '@angular/core'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  public items = [
    {
      text: 'Restoration contractor company ownership',
    },
    {
      text: 'Various manufacturer certifications',
    },
    {
      text: 'Licensed adjusting experience',
    },
    {
      text: 'National industry keynote speaking',
    },
    {
      text: 'Large loss consulting',
    },
    {
      text: 'Appraisal and umpire experience',
    },
    {
      text: 'Licensed general contracting',
    },
  ]
}
