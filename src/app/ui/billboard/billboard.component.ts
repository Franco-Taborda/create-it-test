import { Component, Input, OnInit } from '@angular/core';
import { DumbComponent } from '@core/components/dumb.component';
import { IBillboard } from '@models/movies/interface/billboard.interface';

@Component({
  selector: 'app-billboard',
  templateUrl: 'billboard.component.html',
  styleUrls: ['./billboard.component.scss'],
})
export class BillboardComponent extends DumbComponent implements OnInit {
  @Input() billboard: IBillboard;

  constructor() {
    super();
  }

  ngOnInit() {}
}
