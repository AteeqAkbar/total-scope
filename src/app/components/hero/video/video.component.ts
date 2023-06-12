import { Component, ViewEncapsulation } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
interface MyMediaCard {
  videoSrc?: SafeResourceUrl;
}

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class VideoComponent {
  public mediaCards: Array<MyMediaCard> = [
    {
      videoSrc: this.sanitizer.bypassSecurityTrustResourceUrl(
        "https://www.youtube.com/embed/kaiYwkoYtXI"
      ),
    },
  ];

  constructor(private sanitizer: DomSanitizer) {}
}
