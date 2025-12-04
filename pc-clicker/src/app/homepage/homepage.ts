import {Component, signal} from '@angular/core';
import {HeaderComponent} from '../components/header/header';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from '../components/footer/footer';

@Component({
  selector: 'app-homepage',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  standalone : true,
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss'],
})
export class Homepage {
  protected readonly title = signal('pc-clicker');
}
