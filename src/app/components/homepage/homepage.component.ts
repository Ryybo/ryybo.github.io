import { Component } from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";
import {ScrollService} from "../../scroll.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(private breakpointObserver: BreakpointObserver,
              private scrollService: ScrollService
  ) {}

  scrollTo(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      this.scrollService.scrollTo(element);
    }
  }
}
