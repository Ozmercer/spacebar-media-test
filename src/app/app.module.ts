import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClaimScreenComponent } from './claim-screen/claim-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { SecondsToTimerPipe } from './pipes/seconds-to-timer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClaimScreenComponent,
    SecondsToTimerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
