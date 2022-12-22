import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {
  name: string;
  description:string;
  imageSrc: string;
  constructor(private service: DataService){
    this.name = "";
    this.description = "";
    this.imageSrc = "";
  }

  addItems(name: string, description: string, imageSrc: string):void{
    // if (name !== "" && description != "" && imageSrc != ""){
      // console.log(name, description, imageSrc);
    this.service.logData();
    this.service.addData(name, description, imageSrc);
    // }
  }

}
