import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionalityService {
    modal: {style: string, message: string, color: string}
    circleAnimation: {style: string};
    
    constructor() {
       this.modal = {
            style: "top: -100%",
            message: "Will be updated dynamically!",
            color: "background-color: green"
        }
        this.circleAnimation = {
            style: "transform:  translate(-50%, -50%) scale(0); background-color: #ff9f0d;"
        }
    }

    pullDownModal(message: string, type: boolean):void{
        if (type){
            this.modal.color = "background-color: green";
        }
        else{
            this.modal.color = "background-color: red";
        }
        this.modal.style = "top: 1%";
        this.modal.message = message;
    }

    closeModal():void{
        this.modal.style = "top: -100%";
    }


    enlargeCircle(){
        this.circleAnimation.style = "transform:  translate(-50%, -50%) scale(1.5); background-color: #ff9f0d;";
        console.log(this.circleAnimation);
    }

    closeCircle(){
        this.circleAnimation.style = "transform:  translate(-50%, -50%) scale(0); background-color: #ff9f0d;";
    }

    fadeCicle(){
        this.circleAnimation.style = "transform:  translate(-50%, -50%) scale(1.5); background-color: transparent;";   
    }
}
