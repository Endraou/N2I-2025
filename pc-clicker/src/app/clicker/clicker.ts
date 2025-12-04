import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-clicker',
  imports: [RouterOutlet],
  templateUrl: './clicker.html',
  styleUrl: './clicker.scss'
})
export class Clicker {
  protected readonly title = signal('pc-clicker');
}
