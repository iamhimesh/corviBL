/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:03:21
 * @modify date 2018-08-10 11:03:21
 * @desc [description]
*/
import { NgModule } from '@angular/core';
import { MoreComponent } from './more/more';
import { IonicPageModule } from 'ionic-angular';
import { HeaderComponent } from './header/header';
import { Pdfviewer } from './pdfviewer/pdfviewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
    declarations: [MoreComponent,
        HeaderComponent,
        Pdfviewer,
    ],
    imports: [PdfViewerModule,
        IonicPageModule.forChild(MoreComponent)],
    exports: [MoreComponent,
        HeaderComponent,
        Pdfviewer,
    ], entryComponents: [
        Pdfviewer,
    ]
})
export class ComponentsModule {
}
