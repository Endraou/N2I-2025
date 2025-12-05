import {Component, signal} from '@angular/core';
import {Router} from '@angular/router';
import {CommonModule, NgClass} from '@angular/common';

@Component({
  selector: 'app-gamebtn',
  imports: [NgClass, CommonModule],
  templateUrl: './gamebtn.html',
  styleUrl: './gamebtn.scss',
})
export class GamebtnComponent {
  protected readonly title = signal('pc-clicker');

  constructor(private router: Router) {}

  goToGame() {
    this.router.navigate(['/clicker']);
  }
}
