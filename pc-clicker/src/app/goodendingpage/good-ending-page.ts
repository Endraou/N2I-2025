import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CipherbtnComponent} from '../components/cipherbtn/cipherbtn';
import {HintbtnComponent} from '../components/hintbtn/hintbtn';
import {TimerComponent} from '../components/timer/timer';

@Component({
  selector: 'app-goodend',
  standalone: true,
  imports: [CommonModule, CipherbtnComponent, HintbtnComponent, TimerComponent],
  templateUrl: './good-ending-page.html',
  styleUrls: ['./good-ending-page.scss']
})

export class GoodEndingPage {}
