import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-english-enigm-Nico',
  standalone : true,
  imports: [CommonModule, RouterLink],
  templateUrl: 'enigmEnglishNico.html',
  styleUrl: 'enigmEnglishNico.scss',
})

export class EnglishNicoComponent {

  isValid : boolean = false;
  isValidateButtonClicked: boolean = false;
  correctAnswers : string[] = ["ice", "peas", "pod","mile","ball","court","rock","bottom"];
  answersSelected : string[] = [];
  nbOfFaults : number = 0;

  constructor() {
  }


  validAnswers():boolean{
    for(let i=0; i<this.correctAnswers.length; i++){
      if(this.correctAnswers[i]!=this.answersSelected[i]){
        return false;
      }
    }
    return true;
  }

  getNbOfFaults():void{
    let faults=0;
    for(let i=0; i<this.correctAnswers.length; i++){
      if(this.correctAnswers[i]!=this.answersSelected[i]){
        faults++;
      }
    }
    this.nbOfFaults = faults;
  }

  addAnswer(answer:string, index:number):void{
    this.answersSelected[index] = answer;
  }

  check(): void {
    this.isValid = this.validAnswers();
  }

  resetSelectedAnswers():void{
    this.answersSelected = [];
    this.isValid = false;
    this.isValidateButtonClicked = false;
    this.nbOfFaults=0;
  }

  showResult():void{
    this.isValidateButtonClicked=true;
    this.getNbOfFaults();
    this.check();
    if(this.isValid){
      console.log("You're right");
    }
    else{
      console.log("You're wrong");
    }
  }
}
