import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClockService } from '../../service/clock_service';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs'; // Import Observable

@Component({
  selector: 'app-timer',
  templateUrl: './timer.html',
  styleUrls: ['./timer.scss'],
  imports: [AsyncPipe]
})
export class TimerComponent implements OnInit, OnDestroy {
  // FIX 1: Strictly type this Observable so the HTML knows it's a number
  public time$: Observable<number>;
  private timeSubscription: Subscription = new Subscription();

  constructor(
    private clockService: ClockService,
    private router: Router
  ) {
    this.time$ = this.clockService.remainingTime$;
  }

  ngOnInit() {
    this.clockService.startGame();

    this.timeSubscription = this.clockService.remainingTime$
      .subscribe((seconds) => {
        if (seconds === 0) {
          console.log("redirection to endpage");
          this.router.navigate(['endgame']);
        }
      });
  }

  ngOnDestroy() {
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
    }
  }

  // FIX 2: Allow null in the signature to prevent template errors during async loading
  formatTime(seconds: number | null): string {
    if (seconds === null) return '0:00'; // Handle loading state
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }
}
