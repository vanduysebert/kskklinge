import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WedstrijdNieuwComponent } from './wedstrijd-nieuw.component';

describe('WedstrijdNieuwComponent', () => {
  let component: WedstrijdNieuwComponent;
  let fixture: ComponentFixture<WedstrijdNieuwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WedstrijdNieuwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WedstrijdNieuwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
