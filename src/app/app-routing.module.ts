import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { AddRecipeComponent } from './body/add-recipe/add-recipe.component';
import { RecipeListComponent } from './body/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './body/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './body/shopping-list/shopping-list.component';

const routes: Routes = [
  {path: "", component: BodyComponent},
  {path: "addRecipe", component: AddRecipeComponent},
  {path: "recipeList", component:RecipeListComponent},
  {path: "recipeDetails", component: RecipeDetailsComponent},
  {path: "shoppingList", component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
   
}
