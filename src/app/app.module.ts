import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditsComponent } from './credits/credits.component';
import { MenuModule } from './core/menu/menu.module';
import { HistoryModule } from './history/history.module';
import { FooterModule } from './core/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
    CreditsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HistoryModule,
    MenuModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
