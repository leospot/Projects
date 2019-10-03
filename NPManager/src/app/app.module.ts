import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// Forms module
import { FormsModule } from '@angular/forms';

import { DiarioCreateComponent } from './diario-create/diario-create.component';
import { DiarioDetailsComponent } from './diario-details/diario-details.component';
import { DiarioUpdateComponent } from './diario-update/diario-update.component';
import { DiariosListComponent } from './diarios-list/diarios-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    DiarioCreateComponent,
    DiarioDetailsComponent,
    DiarioUpdateComponent,
    DiariosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
