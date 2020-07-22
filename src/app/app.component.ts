import { Component } from '@angular/core';

import { Link } from './link/link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links: Link[];

  constructor(){
    this.links = [
      new Link('Bootstrap', 'https://www.bootstrapcdn.com/', 100),
      new Link('Angular', 'https://angular.io/start', 30),
      new Link('Google', 'https://www.google.com/', 40)
    ];
    console.log(this.links);
  }
  
  addLink(title: HTMLLinkElement, link: HTMLLinkElement) {
    this.links.push(new Link(title.value, link.value));
    title.value = '';
    link.value = '';
    return false;
  }
}
