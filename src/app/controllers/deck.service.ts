import { HttpClient, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BASE_URL_TOKEN } from '../app.config';
import { DrawDeck } from '../models';

type HttpParamsExtended = HttpParams | HttpParamsOptions['fromObject'];

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  private _BASE_URL = inject(BASE_URL_TOKEN);
  private _http = inject(HttpClient);

  newDeck(deck_count = 1) {
    return this._get<DrawDeck>('/new/shuffle/', { deck_count });
  }

  drawCards(deckId: string, count = 1) {
    return this._get<DrawDeck>(`/${deckId}/draw/`, { count });
  }

  private _get<T>(path: string, params: HttpParamsExtended) {
    return this._http.get<T>(`${this._BASE_URL}/api/deck${path}`, { params });
  }
}
