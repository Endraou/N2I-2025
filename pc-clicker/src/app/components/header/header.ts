import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone : true,
  imports : [RouterOutlet],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  protected readonly title = signal('pc-clicker');
}
