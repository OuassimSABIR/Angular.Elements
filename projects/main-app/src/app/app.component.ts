import { Component, Input, OnDestroy, OnInit, 
         ViewEncapsulation, ChangeDetectorRef, ChangeDetectionStrategy }
         from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit, OnDestroy  {
  public heading = 'Changer ca !';

  constructor(private cd: ChangeDetectorRef) {
  }

  @Input() public authToken: string = '';

  ngOnInit() {
    window.addEventListener('du_subApp', this.customListenerEvent.bind(this), true);
  }

  customListenerEvent(event) {
    this.heading = event.detail.action;
    this.cd.detectChanges();
  }

  
  ngOnDestroy(): void {
    window.removeEventListener('du_subApp', this.customListenerEvent, true);
  }
  
}