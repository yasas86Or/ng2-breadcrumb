import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbComponent } from './components/breadcrumb';
import { BreadcrumbService } from './components/breadcrumbService';

export * from './components/breadcrumb'
export * from './components/breadcrumbService'

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BreadcrumbComponent
    ],
    exports: [
        BreadcrumbComponent
    ]
})

export class Ng2BreadcrumbModule { }