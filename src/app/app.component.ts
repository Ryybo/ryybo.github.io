import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {ScrollService} from "./scroll.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ryybo-website';
  isSmallScreen: boolean = false;
  isSidenavOpen: boolean = false;
  buttonPosition: number = 10;

  constructor(private breakpointObserver: BreakpointObserver,
              private scrollService: ScrollService
  ) {}
    ngOnInit() {
      this.breakpointObserver
        .observe([Breakpoints.XSmall, Breakpoints.Small])
        .subscribe((result) => {
          this.isSmallScreen = result.matches;
          this.isSidenavOpen = !this.isSmallScreen;
        });
    }

  toggleSidenav() {
    if (this.isSmallScreen) {
      this.isSidenavOpen = !this.isSidenavOpen;
    }
    // set position of button when open/close sidenav
    if (this.isSidenavOpen) {
      this.buttonPosition = 250;
    } else {
      this.buttonPosition = 10;
    }
  }

  scrollTo(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      this.scrollService.scrollTo(element);
    }
  }

}
