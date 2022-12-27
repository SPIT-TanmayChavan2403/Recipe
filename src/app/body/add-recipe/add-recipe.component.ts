import { Component } from '@angular/core';
import { FunctionalityService } from 'src/app/functionality.service'
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-add-recipe',
    templateUrl: './add-recipe.component.html',
    styleUrls: ['./add-recipe.component.css']
})


export class AddRecipeComponent {
    name: string;
    description:string;
    imageSrc: string;
    constructor(
        private service: DataService,
        public funcService: FunctionalityService,
        private router: Router
    ){
        this.name = "";
        this.description = "";
        this.imageSrc = "";
    }

    addItems(name: string, description: string, imageSrc: string, rlist: string):void{
        if (name !== "" && description != "" && imageSrc != "" && rlist != ""){
            let list: string[] = rlist.split("/")
            this.service.addData(name, description, imageSrc, list);
            this.funcService.pullDownModal('Recipe added successfully', true);
            setTimeout(() => {
                this.funcService.enlargeCircle();
            }, 2000)

            setTimeout(() => {
                this.funcService.closeModal();
                setTimeout(() =>{
                    this.router.navigate(['']);
                    this.funcService.closeCircle();
                }, 500)
            }, 2500)
        } else {
            this.funcService.pullDownModal('Please enter all the details.', false);
            setTimeout(() => {
                this.funcService.closeModal();
            }, 3000)
        }
    }
}
