import { ViewEncapsulation, Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
interface MyMediaCard {
  videoSrc?: SafeResourceUrl;
}

@Component({
  selector: 'future-estimate-video',
  templateUrl: './future-estimate-video.component.html',
  styleUrls: ['./future-estimate-video.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FutureEstimatVideoComponent {
  public mediaCards: Array<MyMediaCard> = [
    {
      videoSrc: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/kaiYwkoYtXI'
      ),
    },
  ];

  constructor(private sanitizer: DomSanitizer) {}
}
