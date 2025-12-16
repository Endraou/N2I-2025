import {Component, HostListener, OnInit, signal} from '@angular/core';
import {FooterComponent} from '../components/footer/footer';
import {HeaderComponent} from '../components/header/header';
import {GamebtnComponent} from '../components/gamebtn/gamebtn';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [HeaderComponent, FooterComponent, GamebtnComponent, CommonModule, RouterLink],
  standalone : true,
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss'],
})
export class Homepage implements OnInit {

  constructor(private router: Router) {
  }

  protected readonly title = signal('pc-clicker');
  hideButton = false;

  ngOnInit() {
    this.hideButton = false;
    // Scroll automatiquement en haut au chargement
    window.scrollTo(0, 0);
  }

  goToCipher() {
    this.router.navigate(['cipher']);
  }

  @HostListener('window:scroll')
  onScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const texteDiv = document.getElementById('texte');

    // Calculer le pourcentage de scroll
    const scrollPercent = scrollPosition / windowHeight;

    // Cache le bouton progressivement après avoir scrollé un peu
    if (scrollPosition > 100) {
      this.hideButton = true;
      if (texteDiv) {
        texteDiv.classList.add('visible-content');
      }
    } else {
      this.hideButton = false;
      if (texteDiv) {
        texteDiv.classList.remove('visible-content');
      }
    }
  }

  goConditional() {
    this.router.navigate(['/conditional']);
  }
  goEnigme1() {
    this.router.navigate(["/enignme1"]);
  }
}
