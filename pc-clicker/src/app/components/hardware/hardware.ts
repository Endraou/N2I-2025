import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogiqueJeu } from '../../logique-jeu/logique-jeu';

@Component({
  selector: 'app-hardware-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hardware.html',
  styleUrls: ['./hardware.scss']
})
export class HardwareStatusComponent {

  constructor(public logique: LogiqueJeu) {}

  hardware = computed(() => this.logique.hardwareUpgrade());
}
