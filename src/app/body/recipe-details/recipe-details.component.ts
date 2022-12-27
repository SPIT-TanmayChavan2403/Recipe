import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
    recipe: any;
    imageLink: string;
    desc: string;
    foodName: string;
    ingredients: string [];

    constructor(private router: Router, private service: DataService){
        this.recipe = this.router.getCurrentNavigation()!.extras.state;
        this.foodName = this.desc = this.imageLink = "";
        this.ingredients = [];
    }

    ngOnInit(){
        console.log(this.recipe);
        this.service.data.map(food => {
            if (food.name == this.recipe.name){
                this.foodName = food.name;
                this.imageLink = food.imageSrc;
                this.desc = food.description;
                this.ingredients = food.list;
            }
        })
    }

}
