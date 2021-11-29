import { Component, Input, OnInit } from '@angular/core';
import { DumbComponent } from '@core/components/dumb.component';

@Component({
  selector: 'app-home-view',
  templateUrl: 'home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
})
export class HomeViewComponent extends DumbComponent implements OnInit {
  @Input() bgImgSource: string;

  constructor() {
    super();
  }

  ngOnInit() {}
}
