import { AfterViewInit, Component, OnInit } from '@angular/core'
import { NgxUiLoaderService } from 'ngx-ui-loader'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, AfterViewInit {
  constructor(private ngxLoader: NgxUiLoaderService) {}

  ngOnInit() {
    // Show the loader on component initialization
    this.ngxLoader.start()
  }

  ngAfterViewInit() {
    // Hide the loader after the view is initialized
    this.ngxLoader.stop()
  }

  public onButtonClick(): void {
    console.log('click')
  }
}
