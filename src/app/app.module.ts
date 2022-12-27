import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { RecipeListComponent } from './body/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './body/recipe-details/recipe-details.component';

import { DataService } from './data.service';
import { FunctionalityService } from './functionality.service';
import { ModalComponent } from './modal/modal.component';
import { ShoppingListComponent } from './body/shopping-list/shopping-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    ModalComponent,
    ShoppingListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService, FunctionalityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
