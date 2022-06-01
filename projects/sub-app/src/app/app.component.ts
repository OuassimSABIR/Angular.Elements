import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {

  chng_mainApp() {
    const data = {
      action: 'Le changement est effectue'
    };

    const event = new CustomEvent('du_subApp', { detail: data });
    window.dispatchEvent(event);
  }
}