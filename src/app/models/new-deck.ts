import { BaseDeck } from './base-deck';

export interface NewDeck extends BaseDeck {
  shuffled: boolean;
}
