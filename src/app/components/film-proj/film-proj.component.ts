import { Component } from '@angular/core';

@Component({
  selector: 'app-film-proj',
  templateUrl: './film-proj.component.html',
  styleUrls: ['./film-proj.component.css']
})
export class FilmProjComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
