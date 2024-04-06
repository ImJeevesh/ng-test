import { BaseDeck } from './base-deck';
import { Card } from './card';

export interface DrawDeck extends BaseDeck {
  cards: Array<Card>;
}
