import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cipherbtn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cipherbtn.html',
  styleUrl: './cipherbtn.scss',
})
export class CipherbtnComponent {
  @Input() label: string = '';
}
