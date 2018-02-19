import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubNieuwsComponent } from './club-nieuws.component';

describe('ClubNieuwsComponent', () => {
  let component: ClubNieuwsComponent;
  let fixture: ComponentFixture<ClubNieuwsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubNieuwsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubNieuwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
