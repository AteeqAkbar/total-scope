import { AfterViewInit, Component, OnInit } from '@angular/core'
import { NgxUiLoaderService } from 'ngx-ui-loader'
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent implements OnInit, AfterViewInit {
  public items = [
    {
      icon: 'assets/home.svg',
      text: '$297 for up to 2 structures (main house + shed/detached garage (ie)). Your first residential file is FREE.',
      heading: 'Residential Properties',
    },
    {
      icon: 'assets/commercial.svg',
      text: 'Commercial and multifamily files are billed at 1.5% of the increase from the client-submitted insurance bid to the TotalScope estimate. TotalScope will invoice client separately for these files.',
      heading: 'Commercial Properties',
    },
    {
      icon: 'assets/enterprise.svg',
      text: 'For volume north of 100 files per month, call us and we can discuss enterprise-level pricing for your organization',
      heading: 'Enterprise Pricing',
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
