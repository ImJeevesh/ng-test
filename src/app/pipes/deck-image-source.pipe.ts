import { Pipe, type PipeTransform } from '@angular/core';

const DECK_BASE_IMAGE_URL = 'https://deckofcardsapi.com/static/img';

@Pipe({
  name: 'deckImageSrc',
  standalone: true,
})
export class DeckImageSourcePipe implements PipeTransform {
  transform(code: string): string {
    return `${DECK_BASE_IMAGE_URL}/${code}.png`;
  }
}
