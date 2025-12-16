import {Component, Input, SimpleChanges} from '@angular/core';
import {CommonModule, NgClass} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hintbtn',
  imports: [NgClass, CommonModule],
  templateUrl: './hintbtn.html',
  styleUrl: './hintbtn.scss',
})
export class HintbtnComponent {
  constructor(private router: Router) {}

  @Input() hints: string[] = [];

  currentHintIndex = -1;
  currentHint: string | null = null;

  @Input() resetTrigger = 0;

  giveHint(): void {
    if (this.currentHintIndex < this.hints.length - 1) {
      this.currentHintIndex++;
      this.currentHint = this.hints[this.currentHintIndex];
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['resetTrigger']) {
      this.resetHints();
    }
  }
  private resetHints(): void {
    this.currentHintIndex = -1;
    this.currentHint = null;
  }

}
