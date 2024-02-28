import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
   transform(items: any[], terms: string): any[] {
    if(!items) return [];
    if(!terms) return items;
    terms = terms.toLowerCase();
    return items.filter( it => {
      console.log('from search pipe: ', it);
      return it.BillingNo.toLowerCase().includes(terms); // only filter country name
    });
  }
}
