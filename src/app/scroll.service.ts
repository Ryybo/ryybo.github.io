import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
 scrollTo(element: HTMLElement): void {
   element.scrollIntoView({behavior: 'smooth', block: 'start'})
 }
  constructor() { }
}
