import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GameScreen} from '../components/screen/screen';

@Component({
  selector: 'app-clicker',
  imports: [RouterOutlet, GameScreen],
  templateUrl: './clicker.html',
  styleUrl: './clicker.scss'
})
export class Clicker {
  protected readonly title = signal('pc-clicker');
}
