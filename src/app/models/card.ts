import { Suit } from './suit';

type ImageType = 'svg' | 'png';

type ImagesByType = Record<ImageType, string>;

export interface Card {
  code: string,
  image?: string,
  images?: ImagesByType,
  value: string,
  suit: Suit
}

export const FACE_DOWN_CARD: Card = {
  code: 'back',
  value: 'back',
  suit: Suit.BACK
}
