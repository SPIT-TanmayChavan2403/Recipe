import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { FunctionalityService } from 'src/app/functionality.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(private router: Router, private service: DataService, public funcService: FunctionalityService){}

    routeToRecipeList(){
        this.funcService.enlargeCircle();
        setTimeout(() => {
            this.router.navigate(["recipeList"]);
            setTimeout(() => {
                this.funcService.closeCircle();
            },500)
        }, 1000)
    }
}
 