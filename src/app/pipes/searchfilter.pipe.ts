import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter',
  standalone: true
})

export class SearchfilterPipe implements PipeTransform {

  transform(productName: any[], toFilter: string): any[] {
    if (!productName || !toFilter) {
      return productName;
    }

    toFilter = toFilter.toLowerCase();

    return productName.filter(product => {
      return product.title.toLowerCase().includes(toFilter) ||
             product.category.toLowerCase().includes(toFilter);
    });
  }

}