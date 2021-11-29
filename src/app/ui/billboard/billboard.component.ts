import { Component, Input, OnInit } from '@angular/core';
import { DumbComponent } from '@core/components/dumb.component';

@Component({
  selector: 'app-billboard',
  templateUrl: 'billboard.component.html',
  styleUrls: ['./billboard.component.scss'],
})
export class BillboardComponent extends DumbComponent implements OnInit {
  @Input() bgImgSource: string;

  constructor() {
    super();
  }

  ngOnInit() {}
}
