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
  items: WishItem[] = [
    // new WishItem('Learn Angular'),
    // new WishItem('Get Coffee', true),
    // new WishItem('Find grass that cuts itself'),
  ];

  newWishText = ''; // user inputs new wish item

  protected addNewWish() {
    console.log('Adding new wish');
    const trimmedWishText = this.newWishText.trim();

    if (!trimmedWishText) {
      return;
    }

    this.items.push(new WishItem(trimmedWishText)); // adding new item to the collection
    this.clearPendingWishText(); // clear the textbox
  }

  protected toggleItem(item: WishItem) {
    console.log('clicked!');
    item.isComplete = !item.isComplete; // toggling by hand, ie enabling two-way binding
    console.log(item);
  }

  private clearPendingWishText() {
    this.newWishText = '';
  }
}
