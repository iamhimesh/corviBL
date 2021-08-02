/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-17 02:10:54
 * @modify date 2018-08-17 02:10:54
 * @desc [description]
*/
import { NgModule } from '@angular/core';
import { MomentPipe } from './moment/moment';
@NgModule({
	declarations: [MomentPipe],
	imports: [],
	exports: [MomentPipe]
})
export class PipesModule { }
