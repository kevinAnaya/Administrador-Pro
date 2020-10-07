import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';


@NgModule({
    declarations: [
        NopagesfoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagesfoundComponent
    ],
    exports: [
        NopagesfoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagesfoundComponent
    ]
})

export class SharedModule { }
