import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterContacto'
})
export class FilterContactoPipe implements PipeTransform {

  transform(items: any[], searchText: string): any {
    if (!items) {
      return [];
    }
    if (!searchText || searchText.length<2) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return Object.keys(item).some(key => {
        return item[key].toString().toLowerCase().includes(searchText);
      });
    });
  }
  
}
