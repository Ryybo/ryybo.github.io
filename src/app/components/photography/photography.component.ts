import { Component } from '@angular/core';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent {
  photos = [
    { url: '/assets/images/DSC05980.jpg'},
    { url: '/assets/images/DSC08658.JPG'},
    { url: '/assets/images/DSC_5512.jpg'},
    { url: '/assets/images/P1080117.JPG'},
    { url: '/assets/images/P1080921.JPG'},
    { url: '/assets/images/P1080953.JPG'},
    { url: '/assets/images/P1080965.JPG'},
    { url: '/assets/images/P1120108.JPG'},
    { url: '/assets/images/P1120918.JPG'},
    { url: '/assets/images/P1130740.jpg'},
    { url: '/assets/images/P1140357 2.jpg'},
    { url: '/assets/images/P1140686.jpg'},
    { url: '/assets/images/P1150138.jpg'},
    { url: '/assets/images/P1150166.jpg'},
    { url: '/assets/images/P1150724.JPG'},

  ];
}
