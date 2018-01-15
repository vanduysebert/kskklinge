import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventNieuwComponent } from './event-nieuw.component';

describe('EventNieuwComponent', () => {
  let component: EventNieuwComponent;
  let fixture: ComponentFixture<EventNieuwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventNieuwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventNieuwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
