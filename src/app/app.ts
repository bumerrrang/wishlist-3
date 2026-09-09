import { Component, signal } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

// for the initial commit and adding the github remote
@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
//  protected readonly title = signal('wishlist-3');
  items : WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself')
  ];
}
