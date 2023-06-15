import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { AppBarPositionMode } from '@progress/kendo-angular-navigation';
import * as svgIcons from '@progress/kendo-svg-icons';
import { Router } from '@angular/router';
import { Align } from "@progress/kendo-angular-popup";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('anchor', { static: false })
  public anchor!: ElementRef<HTMLElement>; // Add the definite assignment assertion here
  public allIcons = svgIcons;
  public positionMode: AppBarPositionMode = 'sticky';
  public kendokaAvatar =
    'https://www.telerik.com/kendo-angular-ui-develop/components/navigation/appbar/assets/kendoka-angular.png';
  public margin = { horizontal: -46, vertical: 7 };
  public popupAlign: Align = { horizontal: "right", vertical: "top" };
  public show = false;
  public activeLink = '';
  ngOnInit() {
    this.activeLink = this.router.url;
  }
  public navLinks = [
    { path: '/', text: 'Home' },
    { path: '/about', text: 'About' },
    { path: '/pricing', text: 'Pricing' },
    { path: '/videos', text: 'Videos' },
    { path: 'Testimonials', text: 'Testimonials' },
    { path: '/contacts', text: 'Contacts' },
  ];

  onClickLink(link: string) {
    this.activeLink = link;
    // Navigate to a specific route
    this.router.navigate([link]);
  }
  public onToggle(): void {
    this.show = !this.show;
  }

  constructor(private zone: NgZone, private router: Router) {
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
