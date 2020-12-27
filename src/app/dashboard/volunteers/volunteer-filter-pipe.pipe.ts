import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'volunteerFilterPipe'
})
export class VolunteerFilterPipePipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    if (value.length === 0) { return value }
    return value.filter(function (search) {
      return search.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    })
  }

}
