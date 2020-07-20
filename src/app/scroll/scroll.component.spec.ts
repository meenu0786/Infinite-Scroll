import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollComponent } from './scroll.component';
import { StoreModule } from '@ngrx/store';
import { InfiniteScrollReducer } from '../infinite-scroll.reducer';

describe('scrollComponent', () => {
  let component: ScrollComponent;
  let fixture: ComponentFixture<ScrollComponent>;

  it('check loading inital value', () => {
    fixture = TestBed.createComponent(ScrollComponent);
    component = fixture.componentInstance;
    expect(component.loading).toEqual(true);
  });

  it('check getting ids', () => {
    fixture = TestBed.createComponent(ScrollComponent);
    component = fixture.componentInstance;
    expect(component.getIds(2)).toBe(2);
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ transaction: InfiniteScrollReducer }),
      ],
      declarations: [ScrollComponent]
    })
      .compileComponents();
  }));


  it('check the onScroll funtion store', () => {
    fixture = TestBed.createComponent(ScrollComponent);
    component = fixture.componentInstance;
    expect(component.onScroll('event'));
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
