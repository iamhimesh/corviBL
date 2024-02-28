/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-17 02:10:54
 * @modify date 2018-08-17 02:10:54
 * @desc [description]
*/
import { NgModule } from '@angular/core';
import { MomentPipe } from './moment/moment';
import { SortPipe } from './sort/sort';
import { SearchPipe } from './search/search';
@NgModule({
	declarations: [MomentPipe,
		SortPipe,
		SearchPipe
    // SortPipe
],
	imports: [],
	exports: [MomentPipe,
		SortPipe,SearchPipe
    // SortPipe
]
})
export class PipesModule { }
