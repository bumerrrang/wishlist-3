import { Component, signal } from '@angular/core';

// for the initial commit and adding the github remote
@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('wishlist-3');
}
