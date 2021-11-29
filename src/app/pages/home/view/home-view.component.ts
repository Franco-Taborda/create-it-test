import { Component, Input, OnInit } from '@angular/core';
import { DumbComponent } from '@core/components/dumb.component';
import { IMoviesRowDataList } from '@models/movies/interface/movies-row.interface';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-view',
  templateUrl: 'home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
})
export class HomeViewComponent extends DumbComponent implements OnInit {
  @Input() bgImgSource: string;
  @Input() topMoviesRowData: IMoviesRowDataList;

  customOptions: OwlOptions = {
    margin: 20,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    stagePadding: 60,
    dots: false,
    navSpeed: 160,
    navText: ['', ''],
    slideBy: 6,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      960: {
        items: 5,
      },
      1200: {
        items: 6,
      },
      1300: {
        items: 10,
      },
    },
    nav: false,
  };

  constructor() {
    super();
  }

  ngOnInit() {}
}
