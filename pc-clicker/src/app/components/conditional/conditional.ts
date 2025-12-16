import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {HintbtnComponent} from '../hintbtn/hintbtn';

@Component({
  selector: 'app-conditional',
  imports: [FormsModule, CommonModule, HintbtnComponent],
  templateUrl: './conditional.html',
  styleUrl: './conditional.scss',
})
export class Conditional {

  constructor(private router : Router) {
  }
  doneQuestions : number[] = [];

  cipherHints: string[] = [
    'Hint 1 : It reminds me of conditional rules in english',
    'Hint 2 : There are three cases right ? Present -> futur',
    'Hint 3 : or check your previous lessons, quickly !'
  ];

  resetHintsTrigger = 0;

  questions = [
    {
      verbs: ["knew", "would"],
      type: "second",
      inputs: ["", ""],
      selectedType: "",
      index: 0
    },
    {
      verbs: ["had", "would not"],
      type: "third",
      inputs: ["", ""],
      selectedType: "",
      index: 1
    },
    {
      verbs: ["get", "will"],
      type: "first",
      inputs: ["", ""],
      selectedType: "",
      index: 2
    },
    {
      verbs: ["study", "goes"],
      type: "zero",
      inputs: ["", ""],
      selectedType: "",
      index: 3
    },
    {
      verbs: ["find", "will pass"],
      type: "first",
      inputs: ["", ""],
      selectedType: "",
      index: 4
    },
    {
      verbs: ["were", "would put"],
      type: "second",
      inputs: ["", ""],
      selectedType: "",
      index: 5
    },
    {
      verbs: ["had not", "would have"],
      type: "third",
      inputs: ["", ""],
      selectedType: "",
      index: 6
    },
    {
      verbs: ["detects", "locks"],
      type: "zero",
      inputs: ["", ""],
      selectedType: "",
      index: 7
    }
  ];

  currentQuestion = this.questions[Math.floor(Math.random() * this.questions.length)];

  submit(){
    const q = this.currentQuestion;

    const correct = q.inputs[0].trim().toLowerCase() == q.verbs[0] &&
    q.inputs[1].trim().toLowerCase() == q.verbs[1] &&
    q.selectedType == q.type;

    if(correct){
      this.showAnswer(true, "Right answer !")
      this.doneQuestions.push(q.index);
      while(this.doneQuestions.includes(q.index)){
        this.currentQuestion = this.questions[Math.floor(Math.random() * this.questions.length)];
      }

      if(this.doneQuestions.length >= this.questions.length){
        this.backHome();
      }
    }
    else{
      this.showAnswer(false, "Wrong answer...")
    }

  }

  backHome(){
    this.router.navigate(['']);
  }

showAnswer(isCorrect: boolean, message: string) {
    const answerDiv = document.createElement('div');

    answerDiv.textContent = message;

    if (isCorrect) {
        answerDiv.style.color = 'green';
        answerDiv.style.backgroundColor = 'transparent';
        answerDiv.style.padding = '0.5em 1em';
        answerDiv.style.borderRadius = '8px';
        answerDiv.style.marginTop = '1vh';
        answerDiv.style.textAlign = 'center';
        answerDiv.style.fontWeight = 'bold';
        answerDiv.style.fontFamily = "Candara";
    } else {
        answerDiv.style.color = 'red';
        answerDiv.style.backgroundColor = 'transparent';
        answerDiv.style.padding = '0.5em 1em';
        answerDiv.style.borderRadius = '8px';
        answerDiv.style.marginTop = '1vh';
        answerDiv.style.textAlign = 'center';
        answerDiv.style.fontWeight = 'bold';
        answerDiv.style.fontFamily = "Candara";
    }

    const container = document.querySelector('.questionnaire');
    container?.appendChild(answerDiv);

    setTimeout(() => {
        answerDiv.style.opacity = '0';
        setTimeout(() => {
            answerDiv.remove();
        }, 500);
    }, 3000);
}


}
