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
    new WishItem('Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself'),
  ];

  protected listFilter: String = '0';
  protected newWishText = ''; // user inputs new wish item
  protected visibleItems: WishItem[] = this.items;
  private newWishItem: WishItem | undefined;

  protected addNewWish() {
    console.log('Adding new wish');
    const trimmedWishText = this.newWishText.trim();

    if (!trimmedWishText) {
      return;
    }

    this.newWishItem = new WishItem(trimmedWishText);
    // this.items.push(new WishItem(trimmedWishText)); // adding new item to the collection
    this.items.push(this.newWishItem);
    this.visibleItems.push(this.newWishItem)
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

  protected filterChanged($event: any) {
    console.log('filterChanged');
    console.log($event);

    if ($event === '0') {
      this.visibleItems = this.items;
    } else if ($event === '1') {
      this.visibleItems = this.items.filter((item) => !item.isComplete);
    } else {
      this.visibleItems = this.items.filter((item) => item.isComplete);
    }
  }
}
