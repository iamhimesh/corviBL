/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-17 02:10:51
 * @modify date 2018-08-17 02:10:51
 * @desc [description]
*/
import { Pipe } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'moment'
})
export class MomentPipe {

  transform(value, args) {
    args = args || '';
    return args === 'ago' ? moment(value).fromNow() : args === 'date-MM/DD/YYYY' ? moment(value, 'MM/DD/YYYY').format('DD') : args === 'date-DD/MM/YYYY' ? moment(value, 'DD/MM/YYYY').format('DD') : args === 'month-MM/DD/YYYY' ? moment(value, 'MM').format('MMM') : args === 'month-DD/MM/YYYY' ? moment(value, 'DD/MM/YYYY').format('MMM') : args === 'date' ? moment(value, 'MM/DD/YYYY').year() : moment(value).format(args);
  }
}
