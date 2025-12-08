import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClockService {
  // Emits the remaining seconds (number)
  private remainingTimeSubject: BehaviorSubject<number>;
  public remainingTime$: Observable<number>;

  private readonly STORAGE_KEY = 'timer_end_time';
  private endTime: number = 0;

  constructor() {
    // 1. Initialize logic
    this.remainingTimeSubject = new BehaviorSubject<number>(0);
    this.remainingTime$ = this.remainingTimeSubject.asObservable();
  }

  public startGame() {
    this.initTimer();
  }

  private initTimer() {
    const storedEndTime = localStorage.getItem(this.STORAGE_KEY);
    const now = Date.now();

    if (storedEndTime) {
      // A. Resume existing timer
      const parsedTime = parseInt(storedEndTime, 10);

      // Check if the stored time has already passed
      if (parsedTime > now) {
        this.endTime = parsedTime;
      } else {
        // Timer expired while user was away
        this.resetTimer();
        return;
      }
    } else {
      // B. Start a new timer (e.g., 30 minutes)
      const durationInMs = 30 * 60 * 1000;
      this.endTime = now + durationInMs;
      localStorage.setItem(this.STORAGE_KEY, this.endTime.toString());
    }

    // 2. Start the ticker
    this.startTicker();
  }

  private startTicker() {
    // Create an RxJS timer that ticks every 1 second
    timer(0, 1000).pipe(
      map(() => {
        const now = Date.now();
        const diff = Math.floor((this.endTime - now) / 1000); // Difference in seconds
        return diff;
      }),
      // Stop emitting if time runs out
      takeWhile(val => val >= 0)
    ).subscribe(secondsRemaining => {
      this.remainingTimeSubject.next(secondsRemaining);

      // Optional: Clear storage when done
      if (secondsRemaining === 0) {
        localStorage.removeItem(this.STORAGE_KEY);
      }
    });
  }

  // Helper to force a reset if needed manually
  public resetTimer() {
    localStorage.removeItem(this.STORAGE_KEY);
    this.remainingTimeSubject.next(0);
    // You can call initTimer() here if you want it to restart immediately
  }
}
