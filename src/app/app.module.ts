import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SgpaComponent } from './sgpa/sgpa.component';
import { CgpaComponent } from './cgpa/cgpa.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, SgpaComponent, CgpaComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
