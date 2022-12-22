import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { AddRecipeComponent } from './body/add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from './body/recipe-details/recipe-details.component';
import { RecipeListComponent } from './body/recipe-list/recipe-list.component';

const routes: Routes = [
  {path: "", component: BodyComponent},
  {path: "addRecipe", component: AddRecipeComponent},
  {path: "show", component: BodyComponent},
  {path: "recipeList", component: RecipeListComponent},
  {path: "recipeDetails", component: RecipeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
