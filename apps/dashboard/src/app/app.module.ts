import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {
  CoreDataModule,
  coreDataRoutes,
} from '@fem-production-angular/core-data';
import {
  CoreStateModule,
  coreStateRoutes,
} from '@fem-production-angular/core-state';
import { MaterialModule } from '@fem-production-angular/material';
import { RoutingModule } from './routing.module';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetListComponent } from './widgets/widget-list/widget-list.component';
import { WidgetDetailsComponent } from './widgets/widget-details/widget-details.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    WidgetsComponent,
    WidgetListComponent,
    WidgetDetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
