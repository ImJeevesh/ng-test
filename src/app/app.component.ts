import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, WritableSignal, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MOCK_CARDS } from './__mock-db';
import { DeckController } from './controllers';
import { Card, FACE_DOWN_CARD } from './models';
import { DeckImageSourcePipe } from './pipes';

@Component({
  selector: 'deck-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    HttpClientModule,
    RouterOutlet,
    DeckImageSourcePipe
  ]
})
export class AppComponent {
  private _dc = inject(DeckController);

  deal: WritableSignal<Array<Card>> = signal([]);

  async drawCards() {
    const { cards } = await this._dc.drawCards(5);
    this._updateDeal(cards);
  }

  drawMockCards() {
    this._updateDeal(MOCK_CARDS);
  }

  clearCards() {
    this._updateDeal([]);
  }

  private _updateDeal(cards: Card[]) {
    this.deal.update(() => cards.length ? [FACE_DOWN_CARD].concat(cards) : []);
  }
}
