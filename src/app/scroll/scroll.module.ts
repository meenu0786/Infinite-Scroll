import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ScrollRoutingModule } from './scroll-routing.module';
import { ScrollComponent } from './scroll.component';
import { ScrollPipe } from '../scroll.pipe';
import { ScrollingService } from '../service/scrolling.service';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
    declarations: [
        ScrollPipe,
        ScrollComponent
    ],
    imports: [
        CommonModule,
        ScrollRoutingModule,
        HttpClientModule,
        ScrollingModule,
        NgxSpinnerModule
    ],
    providers: [ScrollingService]
})
export class ScrollModule { }
