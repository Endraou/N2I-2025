import { Component, OnInit, signal } from '@angular/core';
import { FooterComponent } from '../components/footer/footer';
import { HeaderComponent } from '../components/header/header';
import { GamebtnComponent } from '../components/gamebtn/gamebtn';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  imports: [HeaderComponent, FooterComponent, GamebtnComponent, CommonModule, FormsModule],
  standalone: true,
  templateUrl: './binary-hex.html',
  styleUrls: ['./binary-hex.scss'],
})
export class BinaryHex implements OnInit {
  protected readonly title = signal('pc-clicker');
  phonePhoto: string = "";

  enteredNumber: string = '';
  message: string = '';

  buttons: string[] = ['1','2','3','4','5','6','7','8','9','*','0','#']; // pour ngFor

  ngOnInit() {
    this.phonePhoto = "/telHexa.png";
  }

  appendNumber(value: string) {
    this.enteredNumber += value;
  }

  checkNumber() {
    const correctNumber = '785940352';
    if (this.enteredNumber === correctNumber) {
      const audio = new Audio('tigliCall.m4a');
      audio.play();
    } else {
      this.enteredNumber = '';
    }
  }
}
