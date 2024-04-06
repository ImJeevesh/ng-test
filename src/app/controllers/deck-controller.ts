import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { DeckService } from './deck.service';

@Injectable({
  providedIn: 'root',
})
export class DeckController {
  private _dc = inject(DeckService);
  private _current = '';

  async newDeck() {
    const { deck_id } = await firstValueFrom(this._dc.newDeck());
    return this._current = deck_id;
  }

  async drawCards(count = 1) {
    if (!this._current) {
      await this.newDeck();
    }
    
    return firstValueFrom(this._dc.drawCards(this._current, count));
  }
}