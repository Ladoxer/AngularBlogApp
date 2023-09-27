import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }

  private client = createClient({
    space: '0cmgju6my153',
    accessToken: '81B_RLBrQ-7vf-XctMy4shMhu2w0ft_x3pYeXZoikOY'
  });

  getAllEntries() {
    const promise = this.client.getEntries();
    return from(promise);
  }

  getEntryById(id: string) {
    const promise = this.client.getEntry(id);
    return from(promise);
  }
}
