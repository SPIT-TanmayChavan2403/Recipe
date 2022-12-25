import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { RecipeListComponent } from './body/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './body/recipe-details/recipe-details.component';

import { DataService } from './data.service';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
