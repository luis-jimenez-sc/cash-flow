import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './lib/components/components.module';
import { NotFoundModule } from './views/not-found/not-found.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    NotFoundModule
    //,aboutModule??
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
