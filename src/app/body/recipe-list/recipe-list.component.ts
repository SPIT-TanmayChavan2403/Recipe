import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { FunctionalityService } from 'src/app/functionality.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent {
  constructor(
    public service: DataService,
    private router: Router,
    private funcService: FunctionalityService
    ){}

  getDataFromService(): void{
    this.service.logData();
  }

  showDetails(name: string):void{
    // console.log('Showing details of', name);
    this.funcService.enlargeCircle()
    setTimeout(() => {
      this.router.navigate(["recipeDetails"], { state: { name:name}})
      this.funcService.fadeCicle();
      setTimeout( ()=> {
        this.funcService.closeCircle();
      }, 500)
    }, 1000)
    
  }

}
