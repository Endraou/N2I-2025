import {Component, Input, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {GamebtnComponent} from '../gamebtn/gamebtn';
import {CommonModule, NgClass} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone : true,
  imports: [GamebtnComponent, NgClass, CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  protected readonly title = signal('pc-clicker');
  @Input() scrolled: boolean = false;
}
