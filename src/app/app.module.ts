import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { InfiniteScrollReducer } from './infinite-scroll.reducer';

import { EffectsModule } from '@ngrx/effects';
import { ScrollingEffects } from './scrolling.effect';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([ScrollingEffects]),
    StoreModule.forRoot({ scroll: InfiniteScrollReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
