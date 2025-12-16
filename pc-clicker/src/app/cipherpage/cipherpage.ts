import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CipherbtnComponent } from '../components/cipherbtn/cipherbtn';
import { HintbtnComponent} from '../components/hintbtn/hintbtn';
import {Router} from '@angular/router';
import {TimerComponent} from '../components/timer/timer';

interface GridConfig {
  btnSize: number;
  gap: number;
  padding: number;
}

@Component({
  selector: 'app-cipherpage',
  standalone: true,
  imports: [CommonModule, CipherbtnComponent, HintbtnComponent, TimerComponent],
  templateUrl: './cipherpage.html',
  styleUrl: './cipherpage.scss',
})
export class Cipherpage implements OnInit, OnDestroy {

  buttons: string[] = [];
  selectedLetters: string = '';
  private currentShift: number = 0;
  private readonly password: string = 'TEST';

  cipherHints: string[] = [
    'Hint 1 : It seems to use a Caesar Cypher',
    'Hint 2 : The shift might be irregular',
    'Hint 3 : Pay attention to the shift for each letter entered'
  ];

  resetHintsTrigger = 0;

  constructor(private router: Router) {}

  private readonly alphabet: string[] = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '$', '-', '_', '!'
  ];

  private checkPassword(): void {
    if (this.selectedLetters === this.password) {
      alert('Password correct! Access granted!');
      this.router.navigate(['']);
    } else if (this.selectedLetters.length >= this.password.length) {
      // Password is wrong and too long
      alert('Wrong password!');
      this.clearSelection();
    }
  }

  private config: GridConfig = {
    btnSize: 80,
    gap: 8,
    padding: 8
  };

  ngOnInit(): void {
    this.buttons = this.shuffleArray([...this.alphabet]);
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  @HostListener('window:resize')
  onResize(): void {
    this.buttons = this.shuffleArray([...this.alphabet]);
  }

  onButtonClick(displayedChar: string): void {
    // Find the index of the clicked character in the original alphabet
    const index = this.alphabet.indexOf(displayedChar);

    // Apply Caesar cipher with current shift
    const shiftedIndex = (index + this.currentShift) % this.alphabet.length;
    const encryptedChar = this.alphabet[shiftedIndex];

    // Add encrypted character to output
    this.selectedLetters += encryptedChar;

    // Increment shift for next click
    this.currentShift++;

    if(this.selectedLetters.length==this.password.length) {
      this.checkPassword();
    }
  }

  clearSelection(): void {
    this.selectedLetters = '';
    this.currentShift = 0;
    this.resetHintsTrigger++;
  }

  private shuffleArray(array: string[]): string[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
}
