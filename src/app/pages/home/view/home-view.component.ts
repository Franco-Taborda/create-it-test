import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DumbComponent } from '@core/components/dumb.component';
import { IMoviesRowDataList } from '@models/movies/interface/movies-row.interface';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-view',
  templateUrl: 'home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
})
export class HomeViewComponent extends DumbComponent implements OnInit {
  @Input() rowMaxLen = 8;
  @Input() bgImgSource: string;
  @Input() topMoviesRowData: IMoviesRowDataList;
  @Output() topMoviesSearchEvent: EventEmitter<string> = new EventEmitter();

  public topMoviesRowDataList: IMoviesRowDataList;
  public topMoviesQuery = '';
  public owlCustomOptions: OwlOptions = {
    margin: 20,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 160,
    navText: ['', ''],
    slideBy: 6,
    center: true,
    responsive: {
      0: { items: this.rowMaxLen },
      960: { items: this.rowMaxLen },
      1300: { items: this.rowMaxLen },
    },
    nav: false,
  };

  constructor() {
    super();
  }

  ngOnInit() {}

  public onTopMovieSearch(): void {
    this.topMoviesSearchEvent.emit(this.topMoviesQuery);
  }
}
