import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CipherbtnComponent } from '../components/cipherbtn/cipherbtn';

interface GridConfig {
  btnSize: number;
  gap: number;
  padding: number;
}

@Component({
  selector: 'app-cipherpage',
  standalone: true,
  imports: [CommonModule, CipherbtnComponent],
  templateUrl: './cipherpage.html',
  styleUrl: './cipherpage.scss',
})
export class Cipherpage implements OnInit, OnDestroy {

  buttons: number[] = [];

  private config: GridConfig = {
    btnSize: 80,
    gap: 8,
    padding: 8
  };

  ngOnInit(): void {
    this.calculateGrid();
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  @HostListener('window:resize')
  onResize(): void {
    this.calculateGrid();
  }

  private calculateGrid(): void {
    // 26 boutons pour les lettres de l'alphabet
    this.buttons = Array.from({ length: 30 }, (_, i) => i + 1);
  }
}
