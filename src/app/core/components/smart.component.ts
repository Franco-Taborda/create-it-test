import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Directive() // Needed only for Angular v9+ strict mode that enforce decorator to enable Component inheritance
// tslint:disable-next-line: directive-class-suffix
export abstract class SmartComponent implements OnDestroy {
  public readonly unsubscribe$: Subject<void> = new Subject();

  constructor() {}

  ngOnDestroy(): void {
    this.unsunscribe();
  }

  private unsunscribe(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
