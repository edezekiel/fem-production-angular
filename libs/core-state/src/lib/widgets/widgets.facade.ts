import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';
import { Subject } from 'rxjs';

import { WidgetsService } from '@fem/core-data';
import { Widget } from '@fem/api-interfaces';

import * as WidgetsActions from './widgets.actions';
import * as WidgetsFeature from './widgets.reducer';
import * as WidgetsSelectors from './widgets.selectors';

@Injectable()
export class WidgetsFacade {
  private allWidgets = new Subject<Widget[]>();
  private selectedWidgets = new Subject<Widget>();
  private mutations = new Subject<Widget>();

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  allWidgets$ = this.allWidgets.asObservable();
  selectedWidgets$ = this.selectedWidgets.asObservable();
  mutations$ = this.mutations.asObservable();

  // loaded$ = this.store.pipe(select(WidgetsSelectors.getWidgetsLoaded));
  // allWidgets$ = this.store.pipe(select(WidgetsSelectors.getAllWidgets));
  // selectedWidgets$ = this.store.pipe(select(WidgetsSelectors.getSelected));

  constructor(
    private readonly store: Store,
    private widgetsService: WidgetsService
  ) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(WidgetsActions.init());
  }

  loadWidgets() {
    this.widgetsService
      .all()
      .subscribe((widgets: Widget[]) => this.allWidgets.next(widgets));
  }
}
