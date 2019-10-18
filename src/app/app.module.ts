import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ServiceModule } from './modules/service/services.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [AppComponent, SearchComponent],
  imports: [BrowserModule, FormsModule, ServiceModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
