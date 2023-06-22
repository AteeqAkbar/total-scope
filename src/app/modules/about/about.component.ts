import { AfterViewInit, Component, OnInit } from '@angular/core'
import { NgxUiLoaderService } from 'ngx-ui-loader'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, AfterViewInit {
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

  constructor(private ngxLoader: NgxUiLoaderService) {}

  ngOnInit() {
    // Show the loader on component initialization
    this.ngxLoader.start()
  }

  ngAfterViewInit() {
    // Hide the loader after the view is initialized
    this.ngxLoader.stop()
  }
}
