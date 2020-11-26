import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import {MatCardModule} from '@angular/material/card';

import { ApiService } from "./api.service";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule,MatGridListModule,MatCardModule],
  declarations: [AppComponent],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
