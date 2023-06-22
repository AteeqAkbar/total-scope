import {
  Component,
  ViewChild,
  OnDestroy,
  AfterViewInit,
  ViewEncapsulation,
} from '@angular/core';

export interface Item {
  title?: string;
  url?: string;
}

export const data = [
  { title: 'Flower', url: 'https://bit.ly/2cJjYuB' },
  { title: 'Mountain', url: 'https://bit.ly/2cTBNaL' },
  { title: 'Sky', url: 'https://bit.ly/2cJl3Cx' },
];
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnDestroy, AfterViewInit {
  @ViewChild('sv') private scrollView: any;
  public paused = false;
  public items: Item[] = data;
  public width = '100%';
  public height = '100%';
  private interval: any;

  public ngAfterViewInit(): void {
    this.interval = setInterval(() => {
      if (!this.paused) {
        this.scrollView.next();
      }
    }, 3000);
  }

  public ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
