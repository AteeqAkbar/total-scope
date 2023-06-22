import { AfterViewInit, Component, OnInit } from '@angular/core'
import { NgxUiLoaderService } from 'ngx-ui-loader'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
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
