import { Component, OnInit } from '@angular/core';
import { SmartComponent } from '@app/core/components/smart.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent extends SmartComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}
}
