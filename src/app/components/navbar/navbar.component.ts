import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { AppBarPositionMode } from '@progress/kendo-angular-navigation';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild('anchor', { static: false })
  public anchor!: ElementRef<HTMLElement>; // Add the definite assignment assertion here

  public positionMode: AppBarPositionMode = 'sticky';
  public kendokaAvatar =
    'https://www.telerik.com/kendo-angular-ui-develop/components/navigation/appbar/assets/kendoka-angular.png';
  public margin = { horizontal: -46, vertical: 7 };
  public show = false;

  public onToggle(): void {
    this.show = !this.show;
  }

  constructor(private zone: NgZone) {
    // Assign a value to the anchor property in the constructor
    // if you have a specific ElementRef instance to assign.
    // Otherwise, it will be assigned by ViewChild in the lifecycle hook.
  }

  public onButtonClick(): void {
    console.log('click');
  }
  public ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      window.addEventListener('resize', () => {
        if (this.show) {
          this.zone.run(() => this.onToggle());
        }
      });
    });
  }
}
