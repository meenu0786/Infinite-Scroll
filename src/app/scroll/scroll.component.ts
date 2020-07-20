import { Component, OnInit, ViewChild, ChangeDetectorRef, HostListener } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { select, Store } from '@ngrx/store';
import { GetTrans } from '../infinite-scroll.actions';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit {
  @ViewChild('infiniteScrolling', { static: false }) infiniteScrolling: CdkVirtualScrollViewport;
  loading = false;
  getTransData = {
    noMoreData: false,
    firstCursor: '',
    limit: 10,
    lastCursor: '',
    data: [],
  };

  ngOnInit(): void {
    this.store.dispatch(new GetTrans({
      cursor: this.getTransData.lastCursor,
      limit: this.getTransData.limit
    }));
  }

  getIds(i) {
    return i;
  }

  constructor(
    private store: Store<any>,
    private cd: ChangeDetectorRef
  ) {
    store.pipe(select(state => state)).subscribe(data => {
      if (data.scroll.transactions.length !== 0) {
        this.getTransData.noMoreData = false;
        this.cd.detectChanges();
        this.getTransData.data = data.scroll.transactions;
        this.getTransData.firstCursor = data.scroll.transactions[0][0];
        this.getTransData.lastCursor = data.scroll.transactions[9][0];
      } else {
        this.getTransData.noMoreData = true;
        this.getTransData.firstCursor = '0';
        this.getTransData.lastCursor = '0';
      }
    });
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    this.loading = true;
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      this.loading = false;
      this.store.dispatch(new GetTrans({ cursor: this.getTransData.lastCursor, limit: this.getTransData.limit }));
    }
    this.loading = false;
  }

}
