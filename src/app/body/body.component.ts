import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { FunctionalityService } from 'src/app/functionality.service'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  constructor(private router: Router,
    private service: DataService,
    public funcService: FunctionalityService
    ){}

  sendDataToService(){
    setTimeout(() => {
      this.router.navigate(['addRecipe']);
    }, (3000));

    this.funcService.enlargeCircle();
    setTimeout(() => {
      this.funcService.closeCircle();
    }, (3200))
  }
}
