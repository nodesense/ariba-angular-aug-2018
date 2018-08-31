import { Pipe, PipeTransform } from '@angular/core';

// {{products | sort:fieldName:sortType}}
// {{brands | sort:fieldName:sortType}}

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: any[], fieldName: string,
                          sortType: string= 'asc'): any[] {
    if (!items || !fieldName) {
      return items;
    }

    if (sortType === 'asc') {
      return  items.sort ( (left, right) => {
          if (left[fieldName] > right[fieldName]) {
            return 1;
          }

          if (left[fieldName] < right[fieldName]) {
            return -1;
          }

          return 0;
      });
    }

    return  items.sort ( (left, right) => {
      if (left[fieldName] < right[fieldName]) {
        return 1;
      }

      if (left[fieldName] > right[fieldName]) {
        return -1;
      }

      return 0;
  });
  }

}
