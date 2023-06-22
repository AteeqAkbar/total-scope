import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core'
import { NgxUiLoaderService } from 'ngx-ui-loader'

export interface Item {
  title?: string
  url?: string
}

export const data = [
  { title: 'Flower', url: 'https://bit.ly/2cJjYuB' },
  { title: 'Mountain', url: 'https://bit.ly/2cTBNaL' },
  { title: 'Sky', url: 'https://bit.ly/2cJl3Cx' },
]
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements AfterViewInit, OnInit {
  @ViewChild('sv') private scrollView: any
  public paused = false
  public items: Item[] = data
  public width = '100%'
  public height = '100%'
  private interval: any

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
