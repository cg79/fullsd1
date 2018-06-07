import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleNewsComponent } from './collapsible-news.component';

describe('CollapsibleNewsComponent', () => {
  let component: CollapsibleNewsComponent;
  let fixture: ComponentFixture<CollapsibleNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsibleNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsibleNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
