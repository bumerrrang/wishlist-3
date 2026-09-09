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

  newWishText = '';  // user inputs new wish item

  protected addNewWish() {
    console.log('Adding new wish');
    this.items.push(new WishItem(this.newWishText)); // adding new item to the collection
    this.newWishText = ''; // clear the textbox
  }

  protected toggleItem(e: WishItem) {
    console.log('clicked!');
    console.log(e);
    e.isComplete = !e.isComplete; // toggling by hand, as there is only one way binding
  }
}
