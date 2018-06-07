import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruireDetailsComponent } from './instruire-details.component';

describe('InstruireDetailsComponent', () => {
  let component: InstruireDetailsComponent;
  let fixture: ComponentFixture<InstruireDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstruireDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstruireDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
