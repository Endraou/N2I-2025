import {Component, ElementRef} from '@angular/core';
import {ClockService} from '../../service/clock_service';
import {AsyncPipe} from '@angular/common';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.html',
  styleUrls: ['./timer.scss'],
  imports: [AsyncPipe]
})

export class TimerComponent {
  // Direct reference to the observable (standard naming uses '$')
  public time$: Observable<number>;

  constructor(private clockService: ClockService) {
    this.clockService.startGame();
    this.time$ = this.clockService.remainingTime$;
  }

  formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }
}
