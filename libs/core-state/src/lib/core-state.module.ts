import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CoreDataModule } from '@fem/core-data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { WidgetsEffects } from './widgets/widgets.effects';
import { WidgetsFacade } from './widgets/widgets.facade';
import * as fromWidgets from './widgets/widgets.reducer';

export const coreStateRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    CoreDataModule,
    RouterModule,
    StoreModule.forFeature(
      fromWidgets.WIDGETS_FEATURE_KEY,
      fromWidgets.reducer
    ),
    EffectsModule.forFeature([WidgetsEffects]),
  ],
  providers: [WidgetsFacade],
})
export class CoreStateModule {}
